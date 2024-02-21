import styled from "styled-components";

export const PriceListStyle = styled.ul`
  width: 48%;
  height: auto;
  border-radius: 8px;
  box-shadow: rgba(0, 17, 51, 0.07) 0px 3px 15px;
  background: rgb(255, 255, 255);
  margin-bottom: 5rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const PriceTitle = styled.h4`
  color: rgb(10, 20, 110);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  @media only screen and (min-width: 770px) {
    font-size: 2rem;
  }
`;

export const PriceItem = styled.li`
  gap: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceTitle4 = styled.h4`
  color: rgb(10, 20, 110);
  font-weight: 600;
  padding: 12px;
  font-size: 1.6rem;
  width: 50%;
  text-align: center;
`;

export const PriceParagraph = styled.p`
  padding: 12px;
  display: inline;
  color: rgb(0, 111, 232);
  font-size: 1.6rem;
  width: 50%;
  text-align: center;
`;

export const PriceSpan = styled.p`
  padding: 12px;
  display: inline;
  color: rgb(67, 67, 65);
  font-size: 1.6rem;
  width: 50%;
  text-align: center;
`;
