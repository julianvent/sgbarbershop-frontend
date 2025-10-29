import { useFormContext } from "react-hook-form";
import styles from "./Input.module.css";

const Input = ({ label, type, id, placeholder, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, validation)}
      />
      {errors[id] && <span role="alert">{errors[id].message}</span>}
    </div>
  );
};

export default Input;
