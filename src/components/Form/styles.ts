import styled from "styled-components";

export const Label = styled.label`
  color: rgb(20, 30, 55);
  display: block;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  width: 29%;
  gap: 4px;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  span {
    position: absolute;
    bottom: 20%;
    left: 5%;
    font-size: 16px;
  }
`;

export const Input = styled.input`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgba(0, 17, 51, 0.05) 0px 3px 15px;
  padding: 12px 30px;
  color: rgb(20, 30, 55);
  background: none;
  &:hover {
    border-color: rgb(0, 108, 224);
  }
`;

export const Select = styled.select`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgba(0, 17, 51, 0.05) 0px 3px 15px;
  padding: 12px;
  color: rgb(20, 30, 55);
  background: none;
  &:hover {
    border-color: rgb(0, 108, 224);
  }
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 0px 16px;
  align-items: end;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 16px 0px;
  }
`;

export const FormStyles = styled.form`
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(35, 55, 80, 0.3) 0px 6px 12px;

  width: 100%;
  max-width: 1152px;

  min-height: 340px;

  padding: 24px;

  margin-top: 20px;
`;

export const ButtonSwap = styled.button`
  background: none;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 25px;
    color: rgb(0, 108, 224);
    @media only screen and (max-width: 600px) {
      rotate: 90deg;
    }
  }

  &:hover {
    font-size: 30px;
    border-color: rgb(0, 108, 224);
  }
`;

export const ResultContainer = styled.div`
  margin-top: 25px;
`;

export const ResultParagraph = styled.p`
  color: rgb(92, 102, 123);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7;

  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const ResultTitle = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: rgb(46, 60, 87);
  line-height: 1.7;
`;

export const ResultSpan = styled.span`
  text-align: left;
  color: rgb(92, 102, 123);
  font-size: 1.4rem;
  line-height: 1.7;
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ButtonForm = styled.button`
  width: 100%;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1.6rem;
  color: rgb(255, 255, 255);
  background: rgb(0, 113, 235);
  border: 2px solid rgb(0, 113, 235);
  border-radius: 8px;

  @media only screen and (min-width: 600px) {
    width: 33%;
  }

  &:hover {
    background: rgb(38, 151, 255);
    border-color: rgb(38, 151, 255);
  }
`;

export const InfoContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 8px;
  background: rgb(242, 247, 254);
  border-radius: 6px;
  font-size: 20px;
  color: rgb(55, 60, 73);

  svg {
    margin-right: 3px;
    @media only screen and (max-width: 600px) {
      width: 80px;
      height: 100%;
    }
  }
`;

export const InfoParagraph = styled.p`
  line-height: 1.7;
  a {
    font-size: inherit;
    cursor: pointer;
    display: inline;
    color: rgb(0, 111, 232);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
