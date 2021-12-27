import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API;

export const LOADING = "LOADING";
export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_FILTERS = "SET_FILTERS";

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
  console.log(url);
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

export function setFilters(filter) {
  return {
    type: SET_FILTERS,
    payload: filter,
  };
}
