import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import TextInput from "./components/TextInput";
import User from "./components/User";

import styles from "./App.module.css";

const produtos = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"];

function App() {
  const [listaProdutos, setListaProdutos] = useState(produtos);
  const [produto, setProduto] = useState("");
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <User />
      </div>

      <div className={styles.form}>
        <div className={styles.container}>
          <TextInput
            label="Nome do Produto"
            id="nome_produto"
            onChange={(e) => setProduto(e.target.value)}
          />
          <Button
            label="Adicionar"
            onClick={() => setListaProdutos([...listaProdutos, produto])}
          />
        </div>
      </div>
      <div className={styles.container}>
        <ShoppingList items={listaProdutos} />
      </div>
    </>
  );
}

export default App;
