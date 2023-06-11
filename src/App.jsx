import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import TextInput from "./components/TextInput";
import User from "./components/User";

import styles from "./App.module.css";
import ErrorMessage from "./components/ErrorMessage";
import useShoppingList from "./hooks/useShoppingList";

function App() {
  const {
    addProduct,
    handleProductName,
    listaProdutos,
    mensagemErro,
    produto,
    validate,
  } = useShoppingList();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <User />
      </div>

      <div className={styles.form}>
        <div className={styles.container}>
          <div className={styles.inputGroup}>
            <TextInput
              value={produto}
              label="Nome do Produto"
              id="nome_produto"
              onBlur={validate}
              onChange={handleProductName}
            />
            <ErrorMessage message={mensagemErro} />
          </div>
          <Button label="Adicionar" onClick={addProduct} />
        </div>
      </div>
      <div className={styles.container}>
        <ShoppingList items={listaProdutos} />
      </div>
    </>
  );
}

export default App;
