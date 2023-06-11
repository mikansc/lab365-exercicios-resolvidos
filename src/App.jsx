import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import useShoppingList from "./hooks/useShoppingList";

import { ShoppingContext } from "./context/shoppingContext";

function App() {
  const shoppingList = useShoppingList();

  return (
    <ShoppingContext.Provider value={shoppingList}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ShoppingContext.Provider>
  );
}

export default App;
