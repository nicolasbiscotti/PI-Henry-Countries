import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, setFilters } from "../../actions";
import { StyledFilterOptionsList } from "./style";

export default function FilterOptionsList({
  title,
  type,
  optionsList,
}) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleOnSelectFilter = (e) => {
    const newFilters = {
      ...filters,
      [type]: e.target.getAttribute("data-value"),
    };
    dispatch(setFilters(newFilters));
    dispatch(fetchCountries({ filters: newFilters }));
  };

  return !filters[type] ? (
    <StyledFilterOptionsList>
      <div className="optionsWrapper">
        <h4 className="optionsTitle"> {title} </h4>
        <ul className="optionsList">
          {optionsList.map((option) => {
            return (
              <li
                key={option.value}
                className="option"
                data-value={option.value}
                onClick={handleOnSelectFilter}
              >
                {option.name} ({option.count})
              </li>
            );
          })}
        </ul>
      </div>
    </StyledFilterOptionsList>
  ) : (
    ""
  );
}
