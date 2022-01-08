import { StyledTopbar } from "./styled";

export default function Topbar() {
  return (
    <StyledTopbar>
      <div className="topbarWrapper">
        <img src="images/countries.png" alt="map with countries name" />
        <button>New Activity</button>
      </div>
    </StyledTopbar>
  );
}
