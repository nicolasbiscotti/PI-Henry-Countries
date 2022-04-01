import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../actions";
import CountryCard from "../../components/CountryCard/";
import OrderOptions from "../../components/OrderOptions";
import Paginationbar from "../../components/Paginationbar/";
import Searchbar from "../../components/Searchbar";
import Sidebar from "../../components/Sidebar";
import Spinner from "../../components/Spinner";
import { StyledCountriesList } from "./styledCountriesList";

export default function CountriesList() {
  return (
    <StyledCountriesList>
      <div className="headerWrapper">
        Countries List
        <Searchbar />
        <OrderOptions />
      </div>

      <div className="bodyWrapper">
        <Sidebar />
        <Countries />
      </div>
    </StyledCountriesList>
  );
}

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.isLoading);
  const filters = useSelector((state) => state.filters);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(fetchCountries({ page, filters }));
  }, [dispatch, page, filters]);

  return (
    <div className="countries">
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className="listWrapper">
          {countries.map((country) => {
            return (
              <CountryCard
                key={country.id}
                id={country.id}
                flagURI={country.flagURI}
                name={country.name}
                continent={country.continent}
                population={country.population}
                countryId={country.countryId}
              />
            );
          })}
        </ul>
      )}

      <Paginationbar />
    </div>
  );
}
