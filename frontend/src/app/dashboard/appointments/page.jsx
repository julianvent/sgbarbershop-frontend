"use client";
import styles from "../Main.module.css";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/base_layout/Layout";
import {  appointments,} from "../../utils/data";
import { editAppointments, newAppointmentRoute, seeAppointments } from "@/app/utils/routes";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { defaultColDef, appointmentColumns } from "@/app/utils/columns";
import { ActionButton } from "@/app/components/action/ActionButton";
import { getAppointments } from "./api/appointments";
import { useEffect, useState } from "react";

export default function Appointments() {
  const [appointmentEntries, setAppointmentEntries] = useState();

  useEffect(() => {
    async function fetchAppointments() {
      setAppointmentEntries(await getAppointments(1));
    }

    fetchAppointments();
  }, []);

  const router = useRouter();

  const actions = [
    {
      name: "see",
      route: seeAppointments,
    },
    {
      name: "edit",
      route: editAppointments,
    },
  ];

  const fields = [
    ...appointmentColumns,
    {
      headerName: "",
      field: "id",
      resizable: false,
      cellRenderer: (params) => (
        <ActionButton id={params.data.id} actions={actions} />
      ),
      flex: 1,
    },
  ];

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
          <AgGridReact
            defaultColDef={defaultColDef}
            rowData={appointmentEntries}
            columnDefs={fields}
          />
        </div>
      </div>
    </Layout>
  );
}
