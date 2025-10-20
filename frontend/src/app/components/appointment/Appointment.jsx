import styles from "./Appointment.module.css";
import AppointmentTable from "./appointment_table/AppointmentTable";
import { useRouter } from 'next/navigation';

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
      time: "12:10",
      customer: "Kevin Frias",
      phone: "9211231234",
      status: "Confirmada",
    },
    {
      id: 3,
      date: "18/10/2025",
      time: "12:10",
      customer: "Adrian Herrera",
      phone: "9211231234",
      status: "Confirmada",
    },
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.toolbar}>
        <h1>Citas programadas</h1>
        <button className={styles.button} onClick={() => router.push('/dashboard/appointment')}>Programar cita</button>
      </div>
      <div className={styles.tableContainer}>
        <AppointmentTable entries={entries}></AppointmentTable>
      </div>
    </div>
  );
}
