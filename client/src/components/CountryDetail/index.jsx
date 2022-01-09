import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountryDetail } from "../../actions";
import ActivityCard from "../ActivityCard";
import Spinner from "../Spinner";
import { StyledCountryDetail } from "./styled";

export default function CountryDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const {
    name,
    countryId,
    flagURI,
    continent,
    capital,
    population,
    areaKm2,
    activities,
  } = useSelector((state) => state.countryDetail);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchCountryDetail(id));
  }, []);

  return (
    <StyledCountryDetail>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="countryDetailWrapper">
          <div className="countryWapper">
            <img src={flagURI} alt="country flag" />
            <p>{`
              ${name} (${countryId}): is a country of ${areaKm2}, population of ${population}.
              Its capital ${capital}, is in ${continent}.
            `}</p>
          </div>
          <div className="activiyWrapper">
            {activities ? (
              <ul className="activityList">
                {activities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    name={activity.name}
                    season={activity.season}
                    difficulty={activity.difficulty}
                    durationTime={activity.durationTime}
                  />
                ))}
              </ul>
            ) : (
              <div className="noActivitiesText">
                Not activities yet for {name}
              </div>
            )}
          </div>
        </div>
      )}
    </StyledCountryDetail>
  );
}
