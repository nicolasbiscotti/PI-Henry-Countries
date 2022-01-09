import { StyledActivityCard } from "./styled";

export default function ActivityCard({
  name,
  season,
  difficulty,
  durationTime,
}) {
  return (
    <StyledActivityCard>
      {" "}
      <span className="activityName"> {name} </span>
      <span> {season} </span>
      <span> {difficulty} </span>
      <span> {durationTime} </span>{" "}
    </StyledActivityCard>
  );
}
