import styles from "./ShoppingList.module.css";

const produtos = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"];

function ShoppingList() {
  return (
    <>
      <h2 className={styles.title}>Lista de Compras</h2>
      <ul className={styles.list}>
        {produtos.map((produto, indice) => (
          <li key={indice}>{produto}</li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
