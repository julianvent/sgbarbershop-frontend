import styles from "./Appointment.module.css";
import AppointmentTable from "../appointment_table/AppointmentTable";
import { useRouter } from "next/navigation";

export default function Appointment() {
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

  return (
    <div className={styles.layout}>
      <div className={styles.toolbar}>
        <h1>Citas programadas</h1>
        <button
          className={styles.button}
          onClick={() => router.push("/dashboard/appointments/new")}
        >
          Agendar cita
        </button>
      </div>
      <div className={styles.tableContainer}>
        <AppointmentTable entries={entries}></AppointmentTable>
      </div>
    </div>
  );
}
