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
import { barbers, status, timesAvailable } from "../../../utils/data";
import BarberCard from "@/app/components/form/radio/BarberCard";
import TimeRadio from "@/app/components/form/radio/TimeRadio";

export default function AppointmentForm() {
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
                  onChange={(e) => setSelectedBarber(e.target.value)}
                ></BarberCard>
              ))}
            </div>
          </div>
          <div className={styles.fieldsContainer}>
            <h2>Datos de la cita</h2>
            <fieldset
              disabled={!selectedBarber}
              className={styles.appointmentFields}
            >
              <Select
                options={status}
                {...statusValidation}
                onChange={(e) => setSelectedStatus(e.target.value)}
              ></Select>
              <Input {...dateValidation}></Input>
              <div className={styles.timeContainer}>
                <span>Hora de la cita</span>
                <div className={styles.times}>
                  {timesAvailable.map((time) => (
                    <TimeRadio
                      key={time.id}
                      time={time}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    ></TimeRadio>
                  ))}
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
