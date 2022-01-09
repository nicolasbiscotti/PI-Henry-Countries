import styled from "styled-components";

export const StyledCountryDetail = styled.div`
  height: 91vh;
  .countryDetailWrapper {
    display: flex;
    min-height: 100%;
    .countryWapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 35vw;
        aspect-ratio: 2;
        object-fit: cover;
        border-radius: 10px;
      }
      p {
        width: 35vw;
      }
    }
    .activiyWrapper {
      flex: 1;
      background-color: #ffd200;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .activityList {
        margin: 0;
        padding: 1.5rem;
        list-style: none;
      }
    }
  }
`;
