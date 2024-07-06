import { useSelector } from "react-redux";
import styles from "./purchaseModal.module.css";
import { IRootStoreType } from "../../types/types";
import { addServices } from "../../data/addServices";
import SubscribeImg from "../SubscribeImg/SubscrubeImg";
import AddButton from "../Buttons/AddButton";

type TElement = {
  id: number;
  name_ru: string;
  name: string;
  price: number;
}[];

type TPropsModal = {
  open: boolean;
  setOpen: Function;
  currentFilm: {
    id: number;
    title: string;
    name: string;
    description: string[];
    img: string;
    rating: number;
  }[];
};
export default function PurchaseModal({
  open,
  setOpen,
  currentFilm,
}: TPropsModal) {
  const selected = useSelector(
    (state: IRootStoreType) => state.storeReducer.checkStatus
  );
  const selectedServicesArr: TElement = [];
  const selectedPricesArr: Array<number> = [];

  addServices.forEach((el) => {
    selected.includes(el.id) ? selectedServicesArr.push(el) : "";
  });
  addServices.forEach((el) => {
    selected.includes(el.id) ? selectedPricesArr.push(el.price) : "";
  });

  let sum =
    selectedPricesArr.length > 0
      ? selectedPricesArr.reduce(function (previousValue, value) {
          return previousValue + value;
        })
      : 0;

  return (
    <>
      {open && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.modal__container}
        >
          <h2>{currentFilm[0].title}</h2>

          <div style={{ width: "100%", height: "100px" }}>
            <SubscribeImg
              props={{ img: currentFilm[0].img, name: currentFilm[0].name }}
            />
          </div>
          <div className={styles.container__content_description}>
            {currentFilm[0].description}
          </div>
          <h3>Дополнительно выбрали:</h3>

          {selectedServicesArr.map((el) => {
            return (
              <div className={styles.modal__container_content}>
                <div>{el.name_ru}</div>
                <div>{el.price} руб.</div>
              </div>
            );
          })}
          <div>Сумма: {sum} руб.</div>
          <div className={styles.container__content_buttons}>
            <AddButton button="Купить" action={setOpen} />
            <AddButton button="Отмена" action={setOpen} />
          </div>
        </div>
      )}
    </>
  );
}
