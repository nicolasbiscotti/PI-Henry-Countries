const { Router } = require("express");
const { getActivities } = require("../controllers/activities");

const activitiesRouter = Router();

activitiesRouter.route("/").get(getActivities);

module.exports = activitiesRouter;
