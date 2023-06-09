import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>MinhaListaDeCompras.com.br</h1>
      <div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
