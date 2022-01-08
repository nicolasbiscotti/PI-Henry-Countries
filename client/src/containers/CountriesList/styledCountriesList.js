import styled from "styled-components";

export const StyledCountriesList = styled.div`
  background-color: #ededed;
  .headerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4vh 2rem;
    height: 3vh;
  }
  .bodyWrapper {
    display: flex;
    .countries {
      flex: 4;
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
      .listWrapper {
        list-style: none;
        margin: 0;
        padding: 4vh 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 1.5rem;
      }
    }
  }
`;
