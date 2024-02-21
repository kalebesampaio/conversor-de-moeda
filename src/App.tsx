import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CoinProvider } from "./providers/CoinContext";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <CoinProvider>
      <GlobalStyles />
      <Header />
      <HomePage />
    </CoinProvider>
  );
};

export default App;
