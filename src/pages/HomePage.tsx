import { FormTrade } from "../components/Form";
import { HomeContainer, HomeStyles, HomeTitle } from "./styles";

export const HomePage = () => {
  return (
    <HomeStyles>
      <HomeContainer>
        <HomeTitle>
          Converter 5 Real brasileiro para Dólar dos EUA - BRL para USD
        </HomeTitle>
        <FormTrade />
      </HomeContainer>
    </HomeStyles>
  );
};
