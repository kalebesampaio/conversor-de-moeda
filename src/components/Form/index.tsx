import { IoIosSwap } from "react-icons/io";
import {
  ButtonContainer,
  ButtonForm,
  ButtonSwap,
  FormContainer,
  FormStyles,
  InfoContainer,
  InfoParagraph,
  Input,
  Label,
  ResultContainer,
  ResultParagraph,
  ResultSpan,
  ResultTitle,
  Select,
} from "./styles";
import { CiCircleInfo } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { CoinContext } from "../../providers/CoinContext";
import { Abbreviation } from "../../utils/Abbreviation";

export const FormTrade = () => {
  const {
    setCoin,
    setCoinTrading,
    coin,
    coinTrading,
    value,
    setValue,
    findCurrency,
    computeCurrency,
    result,
    dataCurrency,
  } = useContext(CoinContext);

  useEffect(() => {
    findCurrency();
  }, []);

  useEffect(() => {
    findCurrency();
  }, [coin, coinTrading]);

  const currency = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    e.currentTarget.value = value;
    return e;
  };
  return (
    <FormStyles>
      <FormContainer>
        <Label>
          Valor
          <span>$</span>
          <Input
            type="text"
            placeholder="1,00"
            onKeyUp={currency}
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
        </Label>

        <Label htmlFor="">
          De
          <Select
            name=""
            id=""
            value={coin}
            onChange={(e) => {
              setCoin(e.target.value);
              findCurrency();
              computeCurrency();
            }}
          >
            <option value="BRL">BRL - Real Brasileiro</option>
            <option value="USD">USD - Dólar dos EUA</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Libra esterlina</option>
            <option value="CAD">CAD - Dólar canadense</option>
            <option value="AUD">AUD - Dólar australiano</option>
            <option value="JPY">JPY - Iene Japonês</option>
            <option value="INR">INR - Rúpia indiana</option>
            <option value="NZD">NZD - Dólar neozelandês</option>
            <option value="CHF">CHF - Franco Suíço</option>
            <option value="ZAR">ZAR - Rand sul-africano</option>
            <option value="RUB">RUB - Rublo russo</option>
          </Select>
        </Label>
        <ButtonSwap
          onClick={(e) => {
            e.preventDefault();
            const opt = coin;
            setCoin(coinTrading);
            setCoinTrading(opt);
            findCurrency();
            computeCurrency();
          }}
        >
          <IoIosSwap />
        </ButtonSwap>

        <Label htmlFor="">
          Para
          <Select
            name=""
            id=""
            value={coinTrading}
            onChange={(e) => {
              setCoinTrading(e.target.value);
              findCurrency();
              computeCurrency();
            }}
          >
            <option value="BRL">BRL - Real Brasileiro</option>
            <option value="USD">USD - Dólar dos EUA</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Libra esterlina</option>
            <option value="CAD">CAD - Dólar canadense</option>
            <option value="AUD">AUD - Dólar australiano</option>
            <option value="JPY">JPY - Iene Japonês</option>
            <option value="INR">INR - Rúpia indiana</option>
            <option value="NZD">NZD - Dólar neozelandês</option>
            <option value="CHF">CHF - Franco Suíço</option>
            <option value="ZAR">ZAR - Rand sul-africano</option>
            <option value="RUB">RUB - Rublo russo</option>
          </Select>
        </Label>
      </FormContainer>

      <ResultContainer>
        <ResultParagraph>
          {value} {Abbreviation(coin)} =
        </ResultParagraph>
        <ResultTitle>
          {result} {Abbreviation(coinTrading)}
        </ResultTitle>
        <ResultSpan>
          1 {Abbreviation(coinTrading)} ={" "}
          {dataCurrency?.bid ? dataCurrency.bid : "0,00"} {Abbreviation(coin)}
        </ResultSpan>
      </ResultContainer>
      <ButtonContainer>
        <ButtonForm
          onClick={(e) => {
            e.preventDefault();
            findCurrency();
            computeCurrency();
          }}
        >
          Converter
        </ButtonForm>
      </ButtonContainer>
      <InfoContainer>
        <CiCircleInfo />
        <InfoParagraph>
          Utilizamos a api{" "}
          <a
            href="https://docs.awesomeapi.com.br/api-de-moedas"
            target="_blank"
          >
            AwesomeAPI
          </a>{" "}
          para obtermos os valores das moedas no nosso Conversor. Isso é apenas
          para fins informativos.
        </InfoParagraph>
      </InfoContainer>
    </FormStyles>
  );
};
