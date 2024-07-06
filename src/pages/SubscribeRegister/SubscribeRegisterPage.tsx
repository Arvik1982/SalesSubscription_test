import CustomCheckBox from "../../components/CustomInputCheck/CustomCheckBox";
import styles from "./subscribeRegisterPage.module.css";
import { films } from "../../data/base";
import { addServices } from "../../data/addServices";
import { useNavigate, useParams } from "react-router-dom";
import SubscribeImg from "../../components/SubscribeImg/SubscrubeImg";
import AddButton from "../../components/Buttons/AddButton";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";

export default function SubscribeRegisterPage() {
  const navigate = useNavigate();
  const param = useParams();
  const currentFilm = films.filter((el) => {
    return el.id === Number(param.id);
  });
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.page__container}
      onClick={() => {
        setOpen(false);
      }}
    >
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Домой
      </button>
      <PurchaseModal open={open} setOpen={setOpen} currentFilm={currentFilm} />
      <div className={styles.container__title_box}>
        <h1 className={styles.page__container_title}>
          Подписка на {currentFilm[0].title}
        </h1>
      </div>
      <div className={styles.page__container_img}>
        <SubscribeImg
          props={{ img: currentFilm[0].img, name: currentFilm[0].name }}
        />
      </div>
      <span className={styles.page__container_title}>
        {currentFilm[0].description}
      </span>
      <div className={styles.container__title_box}>
        <span className={styles.page__container_title}>
          Выберите дополнительные услуги
        </span>
      </div>
      <div className={styles.container__checkbox}>
        {addServices.map((service) => {
          return <CustomCheckBox key={service.id} service={service} />;
        })}
      </div>

      <AddButton action={setOpen} />
    </div>
  );
}
