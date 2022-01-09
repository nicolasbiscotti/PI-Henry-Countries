const { Router } = require("express");
const {
  getCountries,
  getCountryDetail,
  getCountriesIdAndName,
} = require("../controllers/countries");

const countriesRouter = Router();

countriesRouter.route("/").get(getCountries);
countriesRouter.route("/list").get(getCountriesIdAndName);
countriesRouter.route("/:id").get(getCountryDetail);

module.exports = countriesRouter;
