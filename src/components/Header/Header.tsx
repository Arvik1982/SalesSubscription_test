import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header__container}>
      <h1 className={styles.container__title_header}>Cinema online</h1>
      <h2>Оформить подписку на фильмы</h2>
    </div>
  );
}
