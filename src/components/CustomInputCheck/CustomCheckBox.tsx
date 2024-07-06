import styles from "./checkbox.module.css";
import InputSelectIcon from "../Icons/InputSelectIcon";
import { useDispatch, useSelector } from "react-redux";
import { setCheckStatus } from "../../store/slices/dataSlice";
import { IRootStoreType, TService, TServiceProp } from "../../types/types";

export default function CustomCheckBox({ service }: TServiceProp) {
  const selected = useSelector(
    (state: IRootStoreType) => state.storeReducer.checkStatus
  );
  const dispatch = useDispatch();

  const checked = (selected: Array<number>, service: TService) => {
    return selected.includes(service.id);
  };

  return (
    <div
      onClick={() => {
        dispatch(setCheckStatus(service.id));
      }}
      className={styles.item__input_box}
    >
      <div
        className={
          !checked(selected, service)
            ? styles.input__box_checkbox
            : styles.input__checkbox_selected
        }
      >
        {!checked(selected, service) ? "" : <InputSelectIcon />}
      </div>
      <div className={styles.input__box_name}>{service.name_ru}</div>
    </div>
  );
}
