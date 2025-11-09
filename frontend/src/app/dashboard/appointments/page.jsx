"use client";
import styles from "../Main.module.css";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/base_layout/Layout";
import {
  appointments,
  appointments_actions,
  appointments_fields,
} from "../../utils/data";
import { newAppointmentRoute } from "@/app/utils/routes";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { defaultColDef } from "@/app/utils/data";

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
          <AgGridReact defaultColDef={defaultColDef} rowData={appointments} columnDefs={appointments_fields}/> 
        </div>
      </div>
    </Layout>
  );
}
