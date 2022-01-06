import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, setFilters } from "../../actions";
import FilterOptionsList from "../FilterOptionsList";
import { StyledSidebar } from "./styled";

/* const activities = [
  { name: "Movies", value: 1, count: 2 },
  { name: "Walk into the city", value: 2, count: 2 },
  { name: "Ride into the wild", value: 3, count: 2 },
  { name: "Ski", value: 4, count: 4 },
  { name: "Sail the coast", value: 5, count: 7 },
  { name: "Surf", value: 6, count: 1 },
  { name: "Rappel", value: 7, count: 4 },
  { name: "Free solo climbing", value: 8, count: 3 },
];
const continents = [
  { name: "Europe", value: "Europe", count: 6 },
  { name: "Asia", value: "Asia", count: 8 },
  { name: "North America", value: "North America", count: 4 },
  { name: "Africa", value: "Africa", count: 10 },
  { name: "South America", value: "South America", count: 6 },
]; */

export default function Sidebar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const continents = useSelector((state) => state.continents);
  const activities = useSelector((state) => state.activities);

  const handleOnUncheckFilter = (e) => {
    const newFilters = {
      ...filters,
      [e.target.getAttribute("data-type")]: "",
    };
    dispatch(setFilters(newFilters));
    dispatch(fetchCountries({ filters: newFilters }));
  };

  return (
    <StyledSidebar>
      {filters.continent ? (
        <span
          className="selectedFilter"
          onClick={handleOnUncheckFilter}
          data-type="continent"
        >
          {
            continents.find(
              (continent) => continent.value === filters.continent
            ).name
          }{" "}
          x
        </span>
      ) : (
        ""
      )}
      {filters.activityId ? (
        <span
          className="selectedFilter"
          onClick={handleOnUncheckFilter}
          data-type="activityId"
        >
          {
            activities.find(
              (activity) =>
                activity.value === Number.parseInt(filters.activityId, 10)
            ).name
          }{" "}
          x
        </span>
      ) : (
        ""
      )}
      <FilterOptionsList
        title="Continents"
        type="continent"
        optionsList={continents}
      />
      <FilterOptionsList
        title="Activities"
        type="activityId"
        optionsList={activities}
      />
    </StyledSidebar>
  );
}
