import { useFormContext } from "react-hook-form";
import styles from "./Time-Radio.module.css";

export default function TimeRadio({ time, onChange }) {
  const { register } = useFormContext();

  return (
    <div className={styles.timeRadioContainer}>
      <input
        type="radio"
        {...register("timeSelected", { onChange: onChange })}
      />
      <label htmlFor="timeSelected">
        <p>{`${time.hour}:${time.minutes}`}</p>
      </label>
    </div>
  );
}
