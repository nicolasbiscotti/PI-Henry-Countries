const { Activity } = require("../db");

const getActivities = async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    const count = activities.length;
    res.json({ count, activities });
  } catch (error) {
    next(error);
  }
};

module.exports = { getActivities };
