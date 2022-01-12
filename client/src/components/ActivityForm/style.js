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
    background: rgb(255, 255, 255);
    background: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0.6124649688977153) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    padding: 1.5rem;
    border-radius: 10px;
    section {
      .fieldSet {
        padding: 1rem;
        .selectedCountries {
          padding: 5px;
          background-color: ghostwhite;
          color: grey;
          font-size: 0.9em;
          border-radius: 5px;
          text-align: center;
          cursor: pointer;
          margin-left: 5px;
          &:nth-child(1) {
            margin: 0;
          }
          &:hover {
            background-color: lightgrey;
          }
        }
      }
    }
    .formFooter {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        padding: 10px;
        background-color: deepskyblue;
        color: ghostwhite;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        text-align: center;
        font-size: 0.9em;
        cursor: pointer;
        margin-left: 10px;
        &:nth-child(1) {
          margin: 0;
        }
        &:hover {
          background-color: dodgerblue;
        }
        &:disabled {
          cursor: not-allowed;
          background-color: darkgrey;
          opacity: 0.5;
        }
      }
      a {
        text-decoration: none;
        font-weight: 600;
        color: black;
        margin: 10px 0;
      }
    }
  }
`;
