"use client";
import Input from "@/app/components/form/input/Input";
import Select from "@/app/components/form/input/Select";
import styles from "./Appointment-Form.module.css";
import { FormProvider, useForm } from "react-hook-form";
import {
  barberValidation,
  customerNameValidation,
  dateValidation,
  phoneValidation,
  scheduleValidation,
  statusValidation,
} from "@/app/utils/inputValidators";
import { useState } from "react";

export default function AppointmentForm() {
  const [isBarberSelected, setIsBarberSelected] = useState(false);
  const methods = useForm();

  const onChange = () => {
    console.log("hola");
  };

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
            <h2>Datos de la cita</h2>
            <div className={styles.servicesFields}>
              <Select {...barberValidation}></Select>
            </div>
            <div className={styles.scheduleFields}>
              <Select
                disabled={!isBarberSelected}
                {...statusValidation}
              ></Select>
              <Input disabled={!isBarberSelected} {...dateValidation}></Input>
              <Input
                disabled={!isBarberSelected}
                {...scheduleValidation}
              ></Input>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
