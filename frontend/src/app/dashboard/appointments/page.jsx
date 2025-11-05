"use client";
import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";
import styles from "@/app/dashboard/styles.module.css";
import Table from "@/app/components/index_table/Table";
import { useRouter } from 'next/navigation';
import Layout from "@/app/components/base_layout/Layout";

export default function Appointments() {
  const router = useRouter();
  const entries = [
    {
      id: 1,
      date: "18/10/2025",
      time: "12:10",
      customer: "Sebastian Hernandez",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 2,
      date: "18/10/2025",
      time: "12:30",
      customer: "Kevin Frias",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 3,
      date: "18/10/2025",
      time: "12:30",
      customer: "Adrian Herrera",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 4,
      date: "18/10/2025",
      time: "12:10",
      customer: "Sebastian Hernandez",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 5,
      date: "18/10/2025",
      time: "12:30",
      customer: "Kevin Frias",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 6,
      date: "18/10/2025",
      time: "12:30",
      customer: "Adrian Herrera",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 7,
      date: "18/10/2025",
      time: "12:10",
      customer: "Sebastian Hernandez",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 8,
      date: "18/10/2025",
      time: "12:30",
      customer: "Kevin Frias",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 9,
      date: "18/10/2025",
      time: "12:30",
      customer: "Adrian Herrera",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 10,
      date: "18/10/2025",
      time: "12:10",
      customer: "Sebastian Hernandez",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 11,
      date: "18/10/2025",
      time: "12:30",
      customer: "Kevin Frias",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 12,
      date: "18/10/2025",
      time: "12:30",
      customer: "Adrian Herrera",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 13,
      date: "18/10/2025",
      time: "12:10",
      customer: "Sebastian Hernandez",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 14,
      date: "18/10/2025",
      time: "12:30",
      customer: "Kevin Frias",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 15,
      date: "18/10/2025",
      time: "12:30",
      customer: "Adrian Herrera",
      phone: "9211231234",
      status: "Confirmada",
    },
  ];

  const fields =[
    {
      name:'Nombre',
      field:'customer'
    },
    {
      name:'Estado',
      field:'status'
    },
    {
      name:'Fecha',
      field:'date'
    },
    {
      name:'Hora',
      field:'time'
    }
  ];

  const actions = [
    {
      text: 'Editar',
      base_url: '/appointments/'
    }
  ];

  return (
    <Layout>
      <div className={styles.layout}>
          <div className={styles.toolbar}>
            <h1>Citas programadas</h1>
            <button className={styles.button} onClick={() => router.push('/dashboard/appointment')}>Programar cita</button>
          </div>
          <div className={styles.tableContainer}>
            <Table entries={entries} fields={fields} actions={actions}></Table>
          </div>
        </div>
    </Layout>
  );
}
