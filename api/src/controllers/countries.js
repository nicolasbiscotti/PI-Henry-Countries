const { Country } = require("../db");

const getCountries = async (req, res, next) => {
  try {
    const countries = await Country.findAll();
    const count = countries.length;
    res.json({ count, countries });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCountries };
