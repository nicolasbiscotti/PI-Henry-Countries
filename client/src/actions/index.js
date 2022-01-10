import axios from "axios";

export const LOADING = "LOADING";
export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_FILTERS = "SET_FILTERS";
export const SET_COUNTRY_DETAIL = "SET_COUNTRY_DETAIL";

export function loading() {
  return {
    type: LOADING,
  };
}

export function setCountries(data) {
  return {
    type: SET_COUNTRIES,
    payload: data,
  };
}

export function fetchCountries(options) {
  options = options || { page: 1, filters: {} };
  const { page, filters } = options;
  let url = page ? `countries?page=${page}` : "countries?page=1";
  for (const key in filters) {
    url += `&${key}=${filters[key]}`;
  }
  return async function (dispatch) {
    dispatch(loading());
    try {
      const response = await axios.get(url);
      dispatch(setCountries(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
}

export function setCountryDetail(countryDetail) {
  return {
    type: SET_COUNTRY_DETAIL,
    payload: countryDetail,
  };
}

export function fetchCountryDetail(id) {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const response = await axios.get(`countries/${id}`);
      dispatch(setCountryDetail(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}
