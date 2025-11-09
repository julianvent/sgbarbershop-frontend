import { useFormContext } from "react-hook-form";
import styles from "./Time-Radio.module.css";
import { timeValidation } from "@/app/utils/inputValidators";

export default function TimeRadio({ time, onChange }) {
  const { register } = useFormContext();

  return (
    <div className={styles.timeRadioContainer}>
      <input
        type="radio"
        value={`${time.hour}:${time.minutes}`}
        {...register(timeValidation.id, { onChange: onChange })}
      />
      <label>{`${time.hour}:${time.minutes}`}</label>
    </div>
  );
}
