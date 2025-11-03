import { useFormContext } from "react-hook-form";
import styles from "./Input.module.css";
import { useState } from "react";

const Select = ({ id, label, options, disabled }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [selectedOption, setSelectedOption] = useState(options[0]);

  console.log(selectedOption);

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <select
        value={selectedOption}
        // FIX: selected option does not change
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
        id={id}
        disabled={disabled}
        {...register(id)}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
