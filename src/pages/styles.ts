import styled from "styled-components";

export const HomeStyles = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.3;
  color: rgb(46, 60, 87);
  @media only screen and (min-width: 770px) {
    font-size: 3rem;
  }
  margin-top: 100px;
`;
