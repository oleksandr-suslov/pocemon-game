import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        <h1>This is title</h1>
        <p>This is Description!</p>
      </div>
    </header>
  );
}
