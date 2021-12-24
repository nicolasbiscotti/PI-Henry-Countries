const { Activity } = require("../db");

const getActivities = async (req, res, next) => {
  try {
    const { count, rows } = await Activity.findAndCountAll();
    res.json({ count, rows });
  } catch (error) {
    next(error);
  }
};

module.exports = { getActivities };
