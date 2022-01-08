import styled from "styled-components";

export const StyledTopbar = styled.div`
  position: sticky;
  top: 0;
  padding: 2vh 2rem;
  background-color: #282a35;
  height: 5vh;
  .topbarWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 5vh;
      width: 8vh;
      border-radius: 50px;
      background-color: white;
    }
  }
`;
