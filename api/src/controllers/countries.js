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

  let include = [];
  include = filters.activityId
    ? [...include, { model: Activity, where: { id: filters.activityId } }]
    : [...include];

  condition.where = where;
  condition.include = include;

  condition.order = filters.order ? [filters.order.split("-")] : [];

  const groupByContinent = {
    attributes: [
      ["continent", "name"],
      ["continent", "value"],
      [conn.fn("count", conn.col("id")), "count"],
    ],
    group: ["continent"],
  };

  const groupByActivityName = {
    attributes: ["name", "id"],
    include: [
      {
        model: Country,
        attributes: ["countryId", "name"],
        through: { attributes: [] },
      },
    ],
  };

  try {
    const { count, rows } = await Country.findAndCountAll(condition);
    const continents = await Country.findAll(groupByContinent);
    const activities = await Activity.findAll(groupByActivityName);
    res.json({
      activities: activities.map((activity) => ({
        name: activity.name,
        value: activity.id,
        count: activity.countries.length,
      })),
      continents,
      page,
      totalPages: Math.ceil(count / COUNTRIES_PER_PAGE),
      count,
      rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCountries };
