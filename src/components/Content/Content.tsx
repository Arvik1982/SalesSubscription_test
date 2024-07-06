import Subscription from "../Subscription/Subscription";
import styles from "./content.module.css";

export default function Content() {
  return (
    <div className={styles.content__container}>
      <Subscription />
    </div>
  );
}
