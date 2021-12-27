import { Link } from "react-router-dom";
import { StyledCountryCard } from "./styled";

export default function CountryCard({
  id,
  flagURI,
  name,
  continent,
  population,
  countryId,
}) {
  return (
    <StyledCountryCard>
      <Link to={`/countries/${id}`} className="countryCardWrapper">
        <img src={flagURI} alt="country flag" />
        <div className="info">
          <h4> {name} </h4>
          <p> <b>Continent:</b> {continent} </p>
          <p> <b>Population:</b> {population} </p>
        </div>
      </Link>
    </StyledCountryCard>
  );
}
