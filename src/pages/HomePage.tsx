import { FormTrade } from "../components/Form";
import { PriceList } from "../components/PriceList";
import { HomeContainer, HomeStyles, HomeTitle } from "./styles";

export const HomePage = () => {
  return (
    <HomeStyles>
      <HomeContainer>
        <HomeTitle>
          Converter 5 Real brasileiro para Dólar dos EUA - BRL para USD
        </HomeTitle>
        <FormTrade />
        <section>
          <PriceList />
          <PriceList />
        </section>
      </HomeContainer>
    </HomeStyles>
  );
};
