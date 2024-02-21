import { useContext } from "react";
import { FormTrade } from "../components/Form";
import { PriceList } from "../components/PriceList";
import { HomeContainer, HomeStyles, HomeTitle } from "./styles";
import { CoinContext } from "../providers/CoinContext";

export const HomePage = () => {
  const { coin, coinTrading } = useContext(CoinContext);
  return (
    <HomeStyles>
      <HomeContainer>
        <HomeTitle>
          Converter Real brasileiro para Dólar dos EUA - BRL para USD
        </HomeTitle>
        <FormTrade />
        <section>
          <PriceList coin={coin} coinin={coinTrading} mult="sim" />
          <PriceList coin={coinTrading} coinin={coin} mult="nao" />
        </section>
      </HomeContainer>
    </HomeStyles>
  );
};
