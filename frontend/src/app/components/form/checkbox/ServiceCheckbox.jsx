import { useFormContext } from "react-hook-form";
import styles from "./Service-Checkbox.module.css";
import { serviceValidation } from "@/app/utils/inputValidators";

export default function ServiceCheckbox({ service, onChange }) {
  const { register } = useFormContext();
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        value={service.id}
        {...register(serviceValidation.id, { onChange: onChange })}
      />
      <label>{service.name}</label>
    </div>
  );
}
