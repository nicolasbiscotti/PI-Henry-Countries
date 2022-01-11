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
      min-height: 88vh;
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
