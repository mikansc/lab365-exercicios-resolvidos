import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
