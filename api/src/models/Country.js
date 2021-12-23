const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagURI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.REAL,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    areaKm2: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.area} km2`;
      },
      set(value) {
        throw new Error("Do not try to set the `areaKm2` value!");
      },
    },
  });
};
