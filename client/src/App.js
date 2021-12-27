import { Route, Routes } from "react-router-dom";
import LandingPage from "./containers/LandingPage/";
import MainCountries from "./containers/MainCountries/";
import CountriesList from "./containers/CountriesList";
import CreateActivity from "./components/CreateActivity/";
import CountryDetail from "./components/CountryDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/countries" element={<MainCountries />}>
        <Route index element={<CountriesList />} />
        <Route path="list" element={<CountriesList />} />
        <Route path=":id" element={<CountryDetail />} />
      </Route>
      <Route path="/activity/create" element={<CreateActivity />} />
    </Routes>
  );
}

export default App;
