const { Router } = require("express");
const { getActivities, addActivity } = require("../controllers/activities");

const activitiesRouter = Router();

activitiesRouter.route("/").get(getActivities).post(addActivity);

module.exports = activitiesRouter;
