import styled from "styled-components";

export const StyledSidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4vh 2rem;
  .selectedFilter {
    color: #555;
    font-size: 0.8em;
    background-color: white;
    padding: 0.5rem;
    cursor: pointer;
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 5px;
  }
`;
