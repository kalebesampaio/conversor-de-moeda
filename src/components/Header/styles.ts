import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--whiteFixed);

  position: fixed;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 5px #ddd;
`;

export const HeaderLogo = styled.img`
  height: 70px;

  cursor: pointer;

  @media only screen and (max-width: 400px) {
    width: 90%;
    height: auto;
  }
`;
