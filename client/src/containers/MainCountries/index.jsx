import { Outlet } from "react-router-dom";
import Topbar from "../../components/Topbar";
import { StyledMainCountries } from "./styled";

export default function MainCountries() {
  return (
    <StyledMainCountries>
      Main Countries
      <Topbar />
      <Outlet />
    </StyledMainCountries>
  );
}
