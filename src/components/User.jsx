import styles from "./User.module.css";

function User() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://github.com/mikansc.png" alt="Mika Nascimento" />
      </div>
      <div className={styles.bio}>
        <span className={styles.name}>Mika Nascimento</span>
        <span className={styles.socialHandler}>@mikansc</span>
        <span className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          fugit!
        </span>
      </div>
    </div>
  );
}

export default User;
