import AddButton from "../Buttons/AddButton";
import styles from "./subscription.module.css";
import { films } from "../../data/base";
import { useEffect, useState } from "react";
import SubscribeImg from "../SubscribeImg/SubscrubeImg";

export default function Subscription() {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      name: string;
      description: string[];
      img: string;
      rating: number;
    }[]
  >([]);

  useEffect(() => {
    setData(films);
  }, []);

  return (
    <>
      {data?.map((genre, index) => {
           return (
          <div key={index} className={styles.subscription__container}>
            <span className={styles.subscription__container_title}>
              {genre.title}
            </span>
            <div className={styles.subscription__container_content}>
              <div className={styles.container__content_rating}>
                <div className={styles.rating__body}>
                  <div
                    style={{ width: `${genre.rating}%` }}
                    className={styles.rating__body_active}
                  ></div>
                  <div className={styles.rating__body_items}>
                    <input
                      type="radio"
                      value={1}
                      name="rating"
                      className={styles.rating__body_item}
                    />
                    <input
                      type="radio"
                      value={2}
                      name="rating"
                      className={styles.rating__body_item}
                    />
                    <input
                      type="radio"
                      value={3}
                      name="rating"
                      className={styles.rating__body_item}
                    />
                    <input
                      type="radio"
                      value={4}
                      name="rating"
                      className={styles.rating__body_item}
                    />
                    <input
                      type="radio"
                      value={5}
                      name="rating"
                      className={styles.rating__body_item}
                    />
                  </div>
                </div>

                <div className={styles.rating__value}>{`${genre.rating}%`}</div>
              </div>
              <div style={{ height: "150px", width: "100%" }}>
                <SubscribeImg props={{ img: genre.img, name: genre.name }} />
              </div>

              <div className={styles.container__content_description}>
                {genre.description.map((el, index) => {
                  return (
                    <span
                      key={index}
                      className={styles.content__description_text}
                    >
                      {el}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className={styles.subscription__container_actions}>
              <AddButton subscribeId={genre.id} />
            </div>
          </div>
        );
      })}
    </>
  );
}
