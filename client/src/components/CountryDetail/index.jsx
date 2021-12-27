import { useParams } from "react-router-dom";
import { StyledCountryDetail } from "./styled";

export default function CountryDetail() {
  const { id } = useParams();
  return <StyledCountryDetail>Country Detail of {id}</StyledCountryDetail>;
}
