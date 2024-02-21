import { useContext } from "react";
import { Abbreviation } from "../../utils/Abbreviation";
import {
  PriceItem,
  PriceListStyle,
  PriceParagraph,
  PriceSpan,
  PriceTitle,
  PriceTitle4,
} from "./styles";
import { CoinContext } from "../../providers/CoinContext";

const list = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];

type Props = {
  coin: string;
  coinin: string;
  mult: string;
};

export const PriceList = ({ coin, coinin, mult }: Props) => {
  const { dataCurrency } = useContext(CoinContext);
  return (
    <PriceListStyle>
      <PriceTitle>
        Converter {Abbreviation(coin)} para {Abbreviation(coinin)}
      </PriceTitle>
      <PriceItem>
        <PriceTitle4>{coin}</PriceTitle4>
        <PriceTitle4>{coinin}</PriceTitle4>
      </PriceItem>

      {list.map((valor) => {
        let result = 0;
        if (dataCurrency) {
          if (mult === "sim") {
            result =
              valor * parseFloat(parseFloat(dataCurrency!.bid).toFixed(2));
          } else {
            result = valor / parseFloat(dataCurrency!.bid);
          }
        }

        return (
          <PriceItem key={valor}>
            <PriceParagraph>
              {valor} {coin}
            </PriceParagraph>
            <PriceSpan>
              {dataCurrency ? parseFloat(result.toFixed(2)) : ""} {coinin}
            </PriceSpan>
          </PriceItem>
        );
      })}
    </PriceListStyle>
  );
};
