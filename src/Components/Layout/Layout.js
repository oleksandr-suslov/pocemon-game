import styles from "./Layout.module.css";

export default function Layout({ title, desc, urlBg, colorBg }) {
  const image = { backgroundColor: colorBg } && {
    backgroundImage: "url(" + urlBg + ")",
  };
  return (
    <section className={styles.root} style={image}>
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={styles.desc + " " + styles.full}>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
