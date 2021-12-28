import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, setFilters } from "../../actions";
import { StyledSearchbar } from "./styled";

export default function Searchbar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [name, setName] = useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value);
    dispatch(setFilters({ ...filters, name: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCountries({ filters }));
  };

  return (
    <StyledSearchbar>
      <form className="searchForm" action="" onSubmit={handleOnSubmit}>
        <input type="text" value={name} onChange={handleOnChangeName} />
        <button>Search</button>
      </form>
    </StyledSearchbar>
  );
}
