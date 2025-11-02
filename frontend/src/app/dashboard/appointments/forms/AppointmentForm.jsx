"use client";
import Input from "@/app/components/form/input/Input";
import styles from "./Appointment-Form.module.css";
import { FormProvider, useForm } from "react-hook-form";
import {
  customerNameValidation,
  dateValidation,
  phoneValidation,
  scheduleValidation,
} from "@/app/utils/inputValidators";

export default function AppointmentForm() {
  const methods = useForm();

  const currentDate = new Date();
  console.log(
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`
  );

  console.log(currentDate.toLocaleDateString());

  return (
    <FormProvider {...methods}>
      <form>
        <div className={styles.formLayout}>
          <div className={styles.fieldsContainer}>
            <h2>Datos del cliente</h2>
            <div className={styles.customerFields}>
              <Input {...customerNameValidation}></Input>
              <Input {...phoneValidation}></Input>
            </div>
          </div>
          <div className={styles.fieldsContainer}>
            <h2>Datos del cliente</h2>
            <div className={styles.appointmentFields}>
              <Input {...customerNameValidation}></Input>
              <Input
                // FIX: check this later
                defaultValue={`${currentDate.toLocaleDateString()}`}
                {...dateValidation}
              ></Input>
              <Input {...scheduleValidation}></Input>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
