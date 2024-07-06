
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import styles from "./subscriptionsPage.module.css";

export default function SubscriptionsPage() {

  return (
    <div className={styles.userpage__container}>    
       <Header/> 
       <Content/>
    </div>
  );
}
