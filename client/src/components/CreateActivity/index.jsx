import Topbar from "../Topbar";
import ActivityForm from "../ActivityForm";
import { StyledCreateActivity } from "./styled";

export default function CreateActivity() {
  return (
    <StyledCreateActivity>
      <Topbar />
      <ActivityForm />
    </StyledCreateActivity>
  );
}
