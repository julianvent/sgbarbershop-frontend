"use client";
import styles from "../Main.module.css";
import Table from "@/app/components/index_table/Table";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/base_layout/Layout";
import {
  appointments,
  appointments_actions,
  appointments_fields,
} from "../../utils/data";
import { newAppointmentRoute } from "@/app/utils/routes";

export default function Appointments() {
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.toolbar}>
          <h1>Citas programadas</h1>
          <button
            className={styles.button}
            onClick={() => router.push(newAppointmentRoute)}
          >
            Programar cita
          </button>
        </div>
        <div className={styles.tableContainer}>
          <Table
            entries={appointments}
            fields={appointments_fields}
            actions={appointments_actions}
          ></Table>
        </div>
      </div>
    </Layout>
  );
}
