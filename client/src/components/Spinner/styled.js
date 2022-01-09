import styled from "styled-components";

export const StyledSpinner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid red;
    border-width: 0px 3px 0px 0px;
    animation: spinner 1s infinite;
    animation-timing-function: linear;
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
