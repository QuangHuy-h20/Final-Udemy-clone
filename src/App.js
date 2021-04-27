import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
// import * as GlobalStyle from './styles/GlobalStyle'
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
