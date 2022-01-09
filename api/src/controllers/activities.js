const { Activity, Country, Op } = require("../db");

const getActivities = async (req, res, next) => {
  try {
    const { count, rows } = await Activity.findAndCountAll();
    res.json({ count, rows });
  } catch (error) {
    next(error);
  }
};

const addActivity = async (req, res, next) => {
  const { name, difficulty, duration, season, countriesId } = req.body;
  try {
    const [activity, created] = await Activity.findOrCreate({
      attributes: { exclude: ["actualizado"] },
      where: { name },
      defaults: {
        difficulty,
        duration,
        season,
      },
      include: [
        {
          model: Country,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          through: { attributes: [] },
        },
      ],
    });
    if (created) {
      const countries = await Country.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { id: { [Op.in]: countriesId } },
      });
      activity.addCountries(countries);
      res.json({ created, activity: {...activity.toJSON(), countries} });
    } else {
      res.json({ created, activity });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getActivities, addActivity };
