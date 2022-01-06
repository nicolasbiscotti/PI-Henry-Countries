/******************************************************************************
   Obtener un listado de todos los coninentes y cuantos paises petenecen 
   a cada uno.
******************************************************************************/
SELECT
continent, count(id) countries
FROM 
countries
GROUP BY continent;
-- Sequelize:
-- const countinents = await Country.findAll({
--   attributes: ["continent", [conn.fn("count", conn.col("id")), "countries"]],
--   group: ["continent"],
-- });

/******************************************************************************
  Obtener un listado de todas las actividades junto a la cantidad de paises 
  en lo que se pueden llevar a cabo.
******************************************************************************/
SELECT
a.name activity_name, count(ca."countryId") countries
FROM
activities a 
INNER JOIN country_activity ca 
ON ca."activityId" = a.id 
GROUP BY activity_name;
-- Sequelize:
-- const activities = await Activity.findAll(
--   {
--     attributes: ["id", "name"],
--     include: [
--       {
--         model: Country,
--         attributes: ["countryId", "name"],
--         through: { attributes: [] },
--       },
--     ],
--   }
-- );
-- const res = activities.map((activity) => ({
--   name: activity.name,
--   countries: activity.countries.length,
-- });

/******************************************************************************
  
******************************************************************************/





SELECT
count(continent), continent
FROM 
countries c 
INNER JOIN country_activity ca 
ON ca."countryId" = c.id
WHERE ca."activityId" = 1
GROUP BY continent;


SELECT
count(continent), continent
FROM 
countries c 
INNER JOIN country_activity ca 
ON ca."countryId" = c.id
INNER JOIN activities a 
ON a.id = ca."activityId"
WHERE ca."activityId" = 1 and c.name ilike '%z%'
GROUP BY continent;


SELECT
count(continent), continent
FROM 
countries c
WHERE c.name ilike '%ar%' 
GROUP BY continent;


SELECT
ca."activityId" activity, continent, name countryName
FROM 
countries c 
INNER JOIN country_activity ca 
ON ca."countryId" = c.id;

