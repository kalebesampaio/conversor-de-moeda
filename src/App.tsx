import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HomePage />
    </>
  );
};

export default App;
