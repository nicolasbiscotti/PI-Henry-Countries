import styled from "styled-components";

export const StyledActivityForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  .activityForm {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: wheat;
    padding: 1.5rem;
    border-radius: 10px;
    section {
      .field-set {
        padding: 1rem;
      }
    }
  }
`;
