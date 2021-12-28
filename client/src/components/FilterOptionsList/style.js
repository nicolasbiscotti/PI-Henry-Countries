import styled from "styled-components";

export const StyledFilterOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2rem;
  .optionsWrapper {
    .optionsTitle {
      color: #333;
      margin-top: 0;
      margin-bottom: 0.6rem;
    }
    .optionsList {
      list-style: none;
      margin: 0;
      padding: 0;
      .option {
        color: #555;
        font-size: 0.9em;
        padding: 0.3rem 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #aaa;
        }
      }
    }
  }
`;
