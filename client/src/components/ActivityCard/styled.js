import styled from "styled-components";

export const StyledActivityCard = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background-color: #999;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: white;
  span {
    flex: 1;
    padding: 1rem;
  }
  .activityName {
    flex: 3;
  }
`;
