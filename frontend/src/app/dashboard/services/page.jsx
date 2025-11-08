"use client";
import styles from "../Main.module.css";
import Table from "@/app/components/index_table/Table";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/base_layout/Layout";
import { serviceFields, servicesEntries } from "@/app/utils/data";
import { appointmentsRoute, newServiceRoute } from "@/app/utils/routes";

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
          <Table entries={servicesEntries} fields={serviceFields}></Table>
        </div>
      </div>
    </Layout>
  );
}
