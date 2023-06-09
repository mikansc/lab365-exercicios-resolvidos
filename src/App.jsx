import { useState } from "react";
import Button from "./components/Button";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import TextInput from "./components/TextInput";
import User from "./components/User";

const produtos = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"];

function App() {
  const [listaProdutos, setListaProdutos] = useState(produtos);
  const [produto, setProduto] = useState("");
  return (
    <div>
      <Navbar />
      <User />
      <TextInput
        label="Nome do Produto"
        id="nome_produto"
        onChange={(e) => setProduto(e.target.value)}
      />
      <Button
        label="Adicionar"
        onClick={() => setListaProdutos([...listaProdutos, produto])}
      />
      <ShoppingList items={listaProdutos} />
    </div>
  );
}

export default App;
