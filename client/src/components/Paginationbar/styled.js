import styled from "styled-components";

export const StyledPaginationbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  span {
    padding: 0.8rem;
  }
  .currentPage {
    background-color: #555;
  }
  .pageButton {
    cursor: pointer;
  }
`;
