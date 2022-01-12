const { Country, Activity } = require("../db");
const activities = require("./dummyActivity.json");
const countries = require("./dummyCountries.json");

const loadCountries = async () => {
  try {
    const rows = await Country.findAll();
    if (!rows.length) {
      console.log("%s Loading activities...");
      const loadedActivities = await Activity.bulkCreate(activities);

      for (let index = 0; index < 16; index++) {
        const country = await Country.create(countries[index]);
        await country.addActivities(
          loadedActivities.slice((2 * index) % 8, ((2 * index) % 8) + 2)
        );
      }

      console.log("%s Loading countries...");
      await Country.bulkCreate(countries.slice(16));
      console.log("%s Activities and Countries loaded successfully!!");
    }
  } catch (error) {
    console.error(`%s Error fetching countries:
    ${error}`);
  }
};

module.exports = { loadCountries };
