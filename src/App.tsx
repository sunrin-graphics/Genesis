import { Route, Routes } from "react-router-dom";
import Clubs from "./pages/Clubs";
import Club from "./pages/club/Club";
import Faq from "./pages/Faq";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/club/:id" element={<Club />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
