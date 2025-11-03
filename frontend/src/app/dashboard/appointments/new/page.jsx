"use client";

import { useRouter } from "next/navigation";
import AppointmentForm from "../forms/AppointmentForm";
import Header from "@/app/components/header/Header";
import styles from "./New-Appointment.module.css";
import Link from "next/link";

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
        <div className={styles.titleContainer}>
          <Link href={"/dashboard/appointments"}>
            <figure className={styles.return}>
              <img src="/arrow-left-solid-full.svg" alt="return" />
            </figure>
          </Link>
          <h1>Agendar cita</h1>
        </div>
        <AppointmentForm></AppointmentForm>
      </main>
    </>
  );
}
