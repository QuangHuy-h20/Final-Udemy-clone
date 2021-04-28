import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
