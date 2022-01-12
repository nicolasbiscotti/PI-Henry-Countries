import { useEffect, useState } from "react";
import { StyledActivityForm } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ActivityForm() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get("/countries/list");
      setCountriesList(() => response.data);
    }
    fetchCountries();
  }, []);

  const difficulty = [1, 2, 3, 4, 5];
  const season = ["Winter", "Spring", "Summer", "Autumn"];

  const initialState = {
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countriesId: [],
  };

  const [activity, setActivity] = useState(initialState);
  const [errors, setError] = useState({});
  const [disabled, setDisabled] = useState(true);

  const validate = (activity) => {
    const errors = {};
    if (!activity.name) {
      errors.name = "Activity name is required";
    }
    if (
      Number.parseInt(activity.duration) < 15 ||
      Number.parseInt(activity.duration) > 240
    ) {
      errors.duration = "Duration is invalid";
    }
    if (!activity.difficulty) {
      errors.difficulty = "Difficulty is required";
    }
    if (!activity.season) {
      errors.season = "Season is invalid";
    }
    if (!activity.countriesId.length) {
      errors.countriesId = "No countries selected";
    }
    return errors;
  };
  const disableCreateButton = (activity) => {
    let errors = validate(activity);
    for (const error in errors) {
      return true;
    }
    return false;
  };

  const activityHandler = (e) => {
    setActivity((activity) => {
      const input = {
        ...activity,
        [e.target.name]: e.target.value,
      };
      setError(() => validate(input));
      setDisabled(() => disableCreateButton(input));
      return input;
    });
  };

  const addCountry = (e) => {
    setActivity((activity) => {
      // to avoid repetitions
      const input =
        activity.countriesId.indexOf(e.target.value) >= 0
          ? { ...activity }
          : {
              ...activity,
              countriesId: [...activity.countriesId, e.target.value],
            };
      setError(() => validate(input));
      setDisabled(() => disableCreateButton(input));
      return input;
    });
  };
  const removeCountry = (e) => {
    setActivity((activity) => {
      const input = {
        ...activity,
        countriesId: activity.countriesId.filter(
          (c) => c !== e.target.dataset.value
        ),
      };
      setError(() => validate(input));
      setDisabled(() => disableCreateButton(input));
      return input;
    });
  };

  const resetHandler = () => {
    setActivity(initialState);
    setDisabled(() => disableCreateButton(initialState));
  };

  const onSubmit = () => {
    axios
      .post("/activities", activity)
      .then((r) => r.data)
      .then((d) => console.log(d));
  };

  return (
    <StyledActivityForm>
      <form action="" className="activityForm">
        <h2>Create an Activity</h2>
        <section>
          <div className="fieldSet">
            <label htmlFor="name">Activity name:</label>
            <input
              onChange={(e) => activityHandler(e)}
              type="text"
              name="name"
              id="name"
              value={activity.name}
              key="name-imput"
              required
            />
            <label
              htmlFor="name"
              className={errors.name ? "warning" : "hidden"}
            >
              {errors.name}
            </label>
          </div>
          <div className="fieldSet">
            <label htmlFor="minutes">Activity duration:</label>
            <input
              onChange={(e) => activityHandler(e)}
              type="number"
              placeholder="duracion debe ser de 15 a 240 minutos"
              name="duration"
              id="minutes"
              value={activity.duration}
              key="durantion-inpu"
              required
            />
            <label
              htmlFor="minutes"
              className={errors.duration ? "warning" : "hidden"}
            >
              {errors.duration}
            </label>
          </div>
          <fieldset>
            <legend>How difficult is:</legend>
            <div>
              {difficulty.map((diff) => (
                <>
                  <input
                    key={`difficulty ${diff}`}
                    onChange={(e) => activityHandler(e)}
                    type="radio"
                    id={`difficulty ${diff}`}
                    name="difficulty"
                    value={diff}
                  />
                  <label htmlFor={`difficulty ${diff}`}>{diff}</label>
                </>
              ))}
              <label className={errors.difficulty ? "warning" : "hidden"}>
                {errors.difficulty}
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Choose the season in which take place:</legend>
            <div>
              {season.map((season, index) => (
                <>
                  <input
                    key={`season${index + 1}`}
                    onChange={(e) => activityHandler(e)}
                    type="radio"
                    id={`season${index + 1}`}
                    name="season"
                    value={season}
                  />
                  <label htmlFor={`season${index + 1}`}>{season}</label>
                </>
              ))}
            </div>
          </fieldset>
        </section>

        <section>
          <div className="fieldSet">
            <select onChange={(e) => addCountry(e)} name="country" id="country">
              <option key="c-0" value="">
                --Please choose one or more countries--
              </option>
              {countriesList.map((country) => (
                <option key={`country-${country.id}`} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="fieldSet">
            {activity.countriesId.map((country) => (
              <span
                onClick={(e) => removeCountry(e)}
                className="selectedCountries"
                key={country}
                name={country}
                data-value={country}
              >
                {
                  countriesList.find((c) => c.id === Number.parseInt(country))
                    .name
                }{" "}
                x
              </span>
            ))}
          </div>
        </section>

        <section className="formFooter">
          <p>
            <button type="reset" onClick={resetHandler}>
              Reset
            </button>
            <button onClick={onSubmit} type="button" disabled={disabled}>
              Create
            </button>
          </p>
          <Link to="../countries">Go Back</Link>
        </section>
      </form>
    </StyledActivityForm>
  );
}
