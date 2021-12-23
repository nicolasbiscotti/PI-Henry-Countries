const { default: axios } = require("axios");
const { Country } = require("../db");

const fetchCountries = async () => {
  try {
    console.log("%s Loading countries...");
    const res = await axios.get("https://restcountries.com/v3/all");
    const countries = res.data.map((country) => ({
      countryId: country.cca3,
      name: country.name.common,
      flagURI: country.flags[0],
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "non capital",
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    }));
    await Country.bulkCreate(countries);
    console.log("%s Countries loaded successfully!!");
  } catch (error) {
    console.error(`%s Error fetching countries:
    ${error}`);
  }
};

module.exports = { fetchCountries };
