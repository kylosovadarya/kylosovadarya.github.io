import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss";
import Header from "./templates/header/Header";
import Navbar from "./templates/header/Navbar";
import Footer from "./templates/footer/Footer";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <MainPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
