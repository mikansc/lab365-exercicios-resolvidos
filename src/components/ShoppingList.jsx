import styles from "./ShoppingList.module.css";

function ShoppingList() {
  return (
    <div>
      <h2 className={styles.title}>Lista de Compras</h2>
      <ul className={styles.list}>
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Macarrão</li>
        <li>Carne</li>
      </ul>
    </div>
  );
}

export default ShoppingList;
