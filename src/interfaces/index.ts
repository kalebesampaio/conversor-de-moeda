export type IData = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};

export type IContext = {
  findCurrency: (coiin?: string, coinin?: string) => void;
  coin: string;
  setCoin: React.Dispatch<React.SetStateAction<string>>;
  coinTrading: string;
  setCoinTrading: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  computeCurrency: () => void;
  result: number;
  SetResult: React.Dispatch<React.SetStateAction<number>>;
  dataCurrency: IData | null;
};
