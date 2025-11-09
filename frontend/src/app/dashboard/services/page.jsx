"use client";
import styles from "../Main.module.css";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/base_layout/Layout";
import { serviceFields, servicesEntries } from "@/app/utils/data";
import { appointmentsRoute, newServiceRoute } from "@/app/utils/routes";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { defaultColDef } from "@/app/utils/data";

export default function Services() {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.toolbar}>
          <h1>Servicios Disponibles</h1>
          <div className={styles.buttonContainer}>
            <button onClick={() => router.push(newServiceRoute)}>
              Crear servicio
            </button>
            <button onClick={() => router.push(appointmentsRoute)}>
              Crear Paquete
            </button>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <AgGridReact defaultColDef={defaultColDef} rowData={servicesEntries} columnDefs={serviceFields}/> 
        </div>
      </div>
    </Layout>
  );
}
