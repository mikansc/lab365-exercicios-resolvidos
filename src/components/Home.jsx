import useShoppingList from "../hooks/useShoppingList";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import ShoppingList from "./ShoppingList";
import TextInput from "./TextInput";
import User from "./User";

import styles from "./Home.module.css";

const Home = () => {
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
};

export default Home;
