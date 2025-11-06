import { useFormContext } from "react-hook-form";
import styles from "./Barber-Card.module.css";

export default function BarberCard({ barber, onChange }) {
  const { register } = useFormContext();
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img src="/Image.png" alt="" />
      </div>
      <div className={styles.radioContainer}>
        <input
          type="radio"
          value={barber.id}
          {...register("barberSelected", { onChange: onChange })}
        />
        <label htmlFor="barberSelected">
          <p>{barber.name}</p>
        </label>
      </div>
    </div>
  );
}
