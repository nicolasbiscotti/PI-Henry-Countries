import styled from "styled-components";

export const StyledCountryCard = styled.li`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 1px 2px 4px -2px #535353;
  box-shadow: 1px 2px 4px -2px #535353;
  transition: box-shadow 0.5s, -webkit-box-shadow 0.5s;
  &:hover {
    -webkit-box-shadow: 1px 4px 6px -2px #535353;
    box-shadow: 1px 4px 6px -2px #535353;
  }
  .countryCardWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #535353;
    text-decoration: none;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 1.5rem;
      object-fit: cover;
      transition: width 2s, height 2s;
    }
  }
`;
