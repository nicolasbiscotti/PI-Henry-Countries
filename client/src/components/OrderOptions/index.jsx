import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, setFilters } from "../../actions";
import { StyledOrderOptions } from "./styled";

export default function OrderOptions() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleOnChangeOreder = (e) => {
    const newFilters = { ...filters, order: e.target.value };
    dispatch(setFilters(newFilters));
    dispatch(fetchCountries({ filters: newFilters }));
  };

  return (
    <StyledOrderOptions>
      <label className="mainLabel" htmlFor="orderSelect">
        Order by:{" "}
      </label>
      <select name="order" id="orderSelect">
        <option onClick={handleOnChangeOreder} value="">
          --chose an option--
        </option>
        <option onClick={handleOnChangeOreder} value="name-ASC">
          name ASC
        </option>
        <option onClick={handleOnChangeOreder} value="name-DESC">
          name DESC
        </option>
        <option onClick={handleOnChangeOreder} value="population-ASC">
          population ASC
        </option>
        <option onClick={handleOnChangeOreder} value="population-DESC">
          population DESC
        </option>
      </select>
    </StyledOrderOptions>
  );
}
