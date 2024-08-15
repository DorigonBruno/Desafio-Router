import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./components/Contato/Contato";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
