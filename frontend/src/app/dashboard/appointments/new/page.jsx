"use client";

import AppointmentForm from "../forms/AppointmentForm";
import Header from "@/app/components/header/Header";
import styles from "./New-Appointment.module.css";
import Link from "next/link";

export default function NewAppointment() {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <main className={styles.scrollableContent}>
        <div className={styles.titleContainer}>
          <Link href={"/dashboard/appointments"}>
            <figure className={styles.return}>
              <img src="/arrow-left-solid-full.svg" alt="return" />
            </figure>
          </Link>
          <h1>Agendar cita</h1>
        </div>
        <div>
          <AppointmentForm></AppointmentForm>
        </div>
      </main>
    </div>
  );
}
