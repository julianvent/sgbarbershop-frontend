"use client";
import Input from "@/app/components/form/input/Input";
import Select from "@/app/components/form/input/Select";
import styles from "./Appointment-Form.module.css";
import { FormProvider, useForm } from "react-hook-form";
import {
  customerNameValidation,
  dateValidation,
  phoneValidation,
  scheduleValidation,
  statusValidation,
} from "@/app/utils/inputValidators";
import { useState } from "react";
import { barbers, status } from "../../../utils/data";
import BarberCard from "@/app/components/form/radio/BarberCard";

export default function AppointmentForm() {
  const [barberSelected, setBarberSelected] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const methods = useForm();

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
            <h2>Asignar barbero</h2>
            <div className={styles.barbers}>
              {barbers.map((barber) => (
                <BarberCard
                  key={barber.id}
                  barber={barber}
                  onChange={(e) => setBarberSelected(e.target.value)}
                ></BarberCard>
              ))}
            </div>
          </div>
          <div className={styles.fieldsContainer}>
            <h2>Datos de la cita</h2>
            <div className={styles.scheduleFields}>
              <Select
                disabled={!barberSelected}
                options={status}
                {...statusValidation}
                onChange={(e) => setSelectedStatus(e.target.value)}
              ></Select>
              <Input disabled={!barberSelected} {...dateValidation}></Input>
              <Input disabled={!barberSelected} {...scheduleValidation}></Input>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
