const { Country, Activity, Op } = require("../db");

const COUNTRIES_PER_PAGE = 10;

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

  try {
    const { count, rows } = await Country.findAndCountAll(condition);
    res.json({
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
