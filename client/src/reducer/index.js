import {
  LOADING,
  SET_COUNTRIES,
  SET_COUNTRY_DETAIL,
  SET_FILTERS,
} from "../actions";

const initialState = {
  countries: [],
  filters: {},
  page: 1,
  totalPages: null,
  isLoading: false,
  continents: [],
  activities: [],
  countryDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload.rows,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        continents: action.payload.continents,
        activities: action.payload.activities,
        isLoading: false,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case SET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
