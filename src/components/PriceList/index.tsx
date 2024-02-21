import {
  PriceItem,
  PriceListStyle,
  PriceParagraph,
  PriceSpan,
  PriceTitle,
  PriceTitle4,
} from "./styles";

export const PriceList = () => {
  return (
    <PriceListStyle>
      <PriceTitle>Converter Real brasileiro para Euro</PriceTitle>
      <PriceItem>
        <PriceTitle4>BRL</PriceTitle4>
        <PriceTitle4>EUR</PriceTitle4>
      </PriceItem>
      <PriceItem>
        <PriceParagraph>1 BRL</PriceParagraph>
        <PriceSpan>0,187653 EUR</PriceSpan>
      </PriceItem>
      <PriceItem>
        <PriceParagraph>1 BRL</PriceParagraph>
        <PriceSpan>0,187653 EUR</PriceSpan>
      </PriceItem>
      <PriceItem>
        <PriceParagraph>1 BRL</PriceParagraph>
        <PriceSpan>0,187653 EUR</PriceSpan>
      </PriceItem>
    </PriceListStyle>
  );
};
