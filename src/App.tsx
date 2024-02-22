import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CoinProvider } from "./providers/CoinContext";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <CoinProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2 * 1000} theme="colored" />
      <Header />
      <HomePage />
    </CoinProvider>
  );
};

export default App;
