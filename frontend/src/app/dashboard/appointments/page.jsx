"use client";
import Appointment from "./appointment/Appointment";
import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";
import styles from "./Appointments-Dashboard.module.css";

export default function Appointments() {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <Sidebar></Sidebar>
      <main className={styles.mainLayout}>
        <Appointment></Appointment>
      </main>
    </div>
  );
}
