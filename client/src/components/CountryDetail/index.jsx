import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountryDetail } from "../../actions";
import { StyledCountryDetail } from "./styled";

export default function CountryDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchCountryDetail(id));
  }, []);

  return <StyledCountryDetail>Country Detail of {id}</StyledCountryDetail>;
}
