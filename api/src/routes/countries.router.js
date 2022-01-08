const { Router } = require("express");
const { getCountries, getCountryDetail } = require("../controllers/countries");

const countriesRouter = Router();

countriesRouter.route("/").get(getCountries);
countriesRouter.route("/:id").get(getCountryDetail);

module.exports = countriesRouter;
