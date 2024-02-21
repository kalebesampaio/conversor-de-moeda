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

export const FormTrade = () => {
  const currency = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value;
    return e;
  };
  return (
    <FormStyles>
      <FormContainer>
        <Label>
          Valor
          <span>$</span>
          <Input type="text" placeholder="1,00" onKeyUp={currency} />
        </Label>

        <Label htmlFor="">
          De
          <Select name="" id="">
            <option value="BRL" selected={true}>
              BRL - Real Brasileiro
            </option>
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
        <ButtonSwap>
          <IoIosSwap />
        </ButtonSwap>

        <Label htmlFor="">
          Para
          <Select name="" id="">
            <option value="BRL">BRL - Real Brasileiro</option>
            <option value="USD" selected={true}>
              USD - Dólar dos EUA
            </option>
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
        <ResultParagraph>1,00 Real brasileiro =</ResultParagraph>
        <ResultTitle>0,18766547 Euro</ResultTitle>
        <ResultSpan>1 EUR = 5,32863 BRL</ResultSpan>
      </ResultContainer>
      <ButtonContainer>
        <ButtonForm>Converter</ButtonForm>
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
