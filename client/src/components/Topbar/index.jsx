import { Link } from "react-router-dom";
import { StyledTopbar } from "./styled";

export default function Topbar() {
  return (
    <StyledTopbar>
      <div className="topbarWrapper">
        <Link to="/countries">
          <img
            src="https://images.pexels.com/photos/7412072/pexels-photo-7412072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="map with countries name"
          />
        </Link>
        <Link to="/activity/create">New Activity</Link>
      </div>
    </StyledTopbar>
  );
}
