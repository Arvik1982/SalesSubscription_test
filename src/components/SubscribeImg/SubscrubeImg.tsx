import styles from "./subscribeImg.module.css";

type TProps = {
  props: {
    img: string;
    name: string;
  };
};

export default function SubscribeImg({ props }: TProps) {
  const { img, name } = props;
  return (
    <div className={styles.content__img_box}>
      <img className={styles.img__box_item} src={img} alt={`${name}`} />
    </div>
  );
}
