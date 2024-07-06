import { useNavigate } from "react-router-dom";
import styles from "./paginationButton.module.css";
import { useEffect, useState } from "react";

type ButtonPropsType = {
  subscribeId?: number;
  button?: string;
  action?: Function;
};

export default function AddButton({
  subscribeId,
  button,
  action,
}: ButtonPropsType) {
  const navigate = useNavigate();
  const [buttonName, setButtonName] = useState("");

  const actionFunction = (action: Function) => {
    button ? action(false) : action(true);
  };

  useEffect(() => {
    button ? setButtonName(button) : "";
  }, [button]);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        subscribeId ? navigate(`/${subscribeId}`) : "";
        action ? actionFunction(action) : "";
      }}
      className={styles.container__button}
    >
      {button ? `${buttonName}` : "Оформить"}
    </button>
  );
}
