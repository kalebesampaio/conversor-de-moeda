import { createContext, useState } from "react";
import { IContext, IData } from "../interfaces";
import { api } from "../services/api";
import { toast } from "react-toastify";

const CoinContext = createContext<IContext>({} as IContext);

type Props = {
  children: React.ReactNode;
};

const CoinProvider = ({ children }: Props) => {
  const [coin, setCoin] = useState<string>("BRL");
  const [coinTrading, setCoinTrading] = useState<string>("USD");
  const [value, setValue] = useState<string>("1");
  const [dataCurrency, setDataCurrency] = useState<IData | null>(null);
  const [result, SetResult] = useState(0);

  const findCurrency = async (
    coiin: string | undefined,
    coinin: string | undefined
  ): Promise<void | IData> => {
    if (coiin) {
      const { data } = await api.get(`json/last/${coiin}-${coinin}`);
      return data?.[`${coiin}${coinin}`];
    }
    try {
      const { data } = await api.get(`json/last/${coin}-${coinTrading}`);
      setDataCurrency(data?.[`${coin}${coinTrading}`]);
    } catch (error) {
      console.error(error);
      toast.error("Ops, aconteceu algum erro no servidor!");
    }
  };

  const computeCurrency = (): void => {
    SetResult(0);
    const newResult =
      parseFloat(parseFloat(value.replace(",", ".")).toFixed(2)) *
      parseFloat(parseFloat(dataCurrency!.bid).toFixed(2));
    SetResult(parseFloat(newResult.toFixed(2)));
  };

  return (
    <CoinContext.Provider
      value={{
        findCurrency,
        coin,
        setCoin,
        coinTrading,
        setCoinTrading,
        value,
        setValue,
        computeCurrency,
        result,
        SetResult,
        dataCurrency,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export { CoinContext, CoinProvider };
