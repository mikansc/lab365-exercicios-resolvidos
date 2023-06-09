import PropTypes from "prop-types";

import styles from "./ShoppingList.module.css";

function ShoppingList({ items = [] }) {
  return (
    <>
      <h2 className={styles.title}>Lista de Compras</h2>
      <ul className={styles.list}>
        {items.map((produto, indice) => (
          <li key={indice}>{produto}</li>
        ))}
      </ul>
    </>
  );
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ShoppingList;
