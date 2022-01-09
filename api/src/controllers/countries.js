const { Country, Activity, Op, conn } = require("../db");

const COUNTRIES_PER_PAGE = 10;

/* req.query = {
  page: number of page to return, optional,
  name: filter countries by name, optional,
  continient: filter countries by continent, optional,
  activityId: filter countries by activities thas can carrey out, optional,
  order: [name-ASC] - [name-DESC] - [population-ASC] - [population-DESC], optional,
} */
const getCountries = async (req, res, next) => {
  const condition = {};
  const page = req.query.page ? Number.parseInt(req.query.page, 10) : 1;
  const filters = req.query;

  condition.offset = COUNTRIES_PER_PAGE * (page - 1);
  condition.limit = COUNTRIES_PER_PAGE;

  condition.attributes = [
    "id",
    "countryId",
    "name",
    "flagURI",
    "continent",
    "population",
  ];

  let where = {};
  where = filters.name
    ? { ...where, name: { [Op.iLike]: `%${filters.name}%` } }
    : { ...where };
  where = filters.continent
    ? { ...where, continent: filters.continent }
    : { ...where };
  condition.where = where;

  const include = filters.activityId
    ? [
        {
          model: Activity,
          attributes: ["id", "name", "durationTime", "difficulty", "season"],
          where: { id: filters.activityId },
          through: { attributes: [] },
        },
      ]
    : [];
  condition.include = include;

  condition.order = filters.order ? [filters.order.split("-")] : [];

  const groupByContinent = {
    attributes: [
      ["continent", "name"],
      ["continent", "value"],
      [conn.fn("count", conn.col("id")), "count"],
    ],
    where: condition.where,
    group: ["continent"],
  };

  const groupByActivityName = {
    attributes: [
      "name",
      ["id", "value"],
      [conn.fn("count", conn.col("countries.id")), "count"],
    ],
    where: filters.activityId ? { id: filters.activityId } : {},
    include: [
      {
        model: Country,
        attributes: [],
        where: { ...condition.where },
        through: { attributes: [] },
      },
    ],
    group: ["activity.id"],
  };

  try {
    const { count, rows } = await Country.findAndCountAll(condition);
    const continents = filters.activityId
      ? rows.reduce((result, country) => {
          for (const continent of result) {
            if (continent.name === country.continent) {
              continent.count += 1;
              return result;
            }
          }
          result.push({
            name: country.continent,
            value: country.continent,
            count: 1,
          });
          return result;
        }, [])
      : await Country.findAll(groupByContinent);
    const activities = await Activity.findAll(groupByActivityName);
    res.json({
      continents,
      activities,
      page,
      totalPages: Math.ceil(count / COUNTRIES_PER_PAGE),
      count,
      rows,
    });
  } catch (error) {
    next(error);
  }
};

const getCountryDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const country = await Country.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { id },
      include: [
        {
          model: Activity,
          attributes: { exclude: ["actualizado"] },
          through: { attributes: [] },
        },
      ],
    });
    if (country) {
      res.json(country);
    } else {
      res.json({ message: `No country found with id: ${id}` });
    }
  } catch (error) {
    next(error);
  }
};

const getCountriesIdAndName = async (req, res, next) => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name"],
    });
    res.json(countries);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCountries, getCountryDetail, getCountriesIdAndName };
