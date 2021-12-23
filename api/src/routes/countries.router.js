const { Router } = require("express");
const { getCountries } = require("../controllers/countries");

const countriesRouter = Router();

countriesRouter.route("/").get(getCountries);

module.exports = countriesRouter;
