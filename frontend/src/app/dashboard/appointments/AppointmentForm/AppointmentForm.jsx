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
  statusValidation,
  timeValidation,
} from "@/app/utils/inputValidators";
import { useState } from "react";
import {
  barbers,
  servicesEntries,
  status,
  timesAvailable,
} from "../../../utils/data";
import BarberCard from "@/app/components/form/radio/BarberCard";
import TimeRadio from "@/app/components/form/radio/TimeRadio";
import { useRouter } from "next/navigation";
import { appointmentsRoute } from "@/app/utils/routes";
import { onNewAppointment } from "../api/newAppointment";
import ServiceCheckbox from "@/app/components/form/checkbox/ServiceCheckbox";

export default function AppointmentForm() {
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const router = useRouter();

  const methods = useForm();
  const {
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    onNewAppointment(data);
    router.push(appointmentsRoute);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            <fieldset
              className={styles.fieldsetContainer}
              {...register(barberValidation.id, barberValidation.validation)}
            >
              <div className={styles.barbers}>
                {barbers.map((barber) => (
                  <BarberCard
                    key={barber.id}
                    barber={barber}
                    onChange={(e) => setSelectedBarber(e.target.value)}
                  ></BarberCard>
                ))}
              </div>
              {errors[barberValidation.id] && (
                <span className={styles.error} role="alert">
                  {errors[barberValidation.id].message}
                </span>
              )}
            </fieldset>
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

              <fieldset
                className={styles.timeContainer}
                {...register(timeValidation.id, timeValidation.validation)}
              >
                <span className={styles.fieldsTitle}>Hora de la cita</span>
                <div className={styles.times}>
                  {timesAvailable.map((time) => (
                    <TimeRadio
                      key={time.id}
                      time={time}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    ></TimeRadio>
                  ))}
                </div>
                {errors[timeValidation.id] && (
                  <p className={styles.error} role="alert">
                    {errors[timeValidation.id].message}
                  </p>
                )}
              </fieldset>

              <fieldset className={styles.servicesContainer}>
                <span className={styles.fieldsTitle}>Servicios</span>
                <div className={styles.services}>
                  {servicesEntries.map((service) => (
                    <ServiceCheckbox
                      key={service.id}
                      service={service}
                      onChange={(e) => console.log("hola")}
                    ></ServiceCheckbox>
                  ))}
                </div>
              </fieldset>
            </fieldset>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.cancelButton}
              onClick={(e) => {
                e.preventDefault();
                router.push(appointmentsRoute);
              }}
            >
              Cancelar
            </button>
            <button>Agendar cita</button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
