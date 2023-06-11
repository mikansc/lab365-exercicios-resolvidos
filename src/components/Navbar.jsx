import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Display from "./Display";

import { useShoppingContext } from "../context/shoppingContext";

function Navbar() {
  const { listaProdutos } = useShoppingContext();

  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MinhaListaDeCompras.com.br</h1>
        <div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quem-somos">Quem somos</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Display value={listaProdutos.length} />
      </div>
    </div>
  );
}

export default Navbar;
