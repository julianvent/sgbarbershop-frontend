import { useFormContext } from "react-hook-form";
import styles from "./Barber-Card.module.css";
import { barberValidation } from "@/app/utils/inputValidators";

export default function BarberCard({ barber, onChange }) {
  const { register } = useFormContext();
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img src={barber.photo} alt={`${barber.name} photo`} />
      </div>
      <div className={styles.radioContainer}>
        <input
          type="radio"
          value={barber.id}
          {...register(barberValidation.id, { onChange: onChange })}
        />
        <label htmlFor={barberValidation.id}>
          <p>{barber.name}</p>
        </label>
      </div>
    </div>
  );
}
