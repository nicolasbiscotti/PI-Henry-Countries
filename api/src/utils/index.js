const { Country, Activity } = require("../db");
const activities = require("./dummyActivity.json");
const countries = require("./dummyCountries.json");
const fs = require("fs");

const fetchCountries = async () => {
  try {
    console.log("%s Loading countries...");

    for (let index = 0; index < 8; index++) {
      const country = countries[index];
      country.activities = activities.slice(2 * index, 2 * (index + 1));
    }
    await Country.bulkCreate(countries, { include: [Activity] });
    console.log("%s Countries loaded successfully!!");
  } catch (error) {
    console.error(`%s Error fetching countries:
    ${error}`);
  }
};

module.exports = { fetchCountries };
