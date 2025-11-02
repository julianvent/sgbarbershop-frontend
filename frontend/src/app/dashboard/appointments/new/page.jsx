"use client";

import { useRouter } from "next/navigation";
import AppointmentForm from "../forms/AppointmentForm";
import Header from "@/app/components/header/Header";
import styles from "./New-Appointment.module.css";

export default function Dashboard() {
  const router = useRouter();
  function handleSubmit(formData) {
    console.log("dik");
    console.log(formData);
  }

  return (
    <>
      <Header></Header>
      <main className={styles.mainContainer}>
        <h1>Agendar cita</h1>
        <AppointmentForm></AppointmentForm>
      </main>
    </>
  );
}
