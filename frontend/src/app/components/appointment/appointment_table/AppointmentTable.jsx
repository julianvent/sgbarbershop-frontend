import styles from "./Appointment-Table.module.css";

export default function AppointmentTable({ entries }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Cliente</th>
          <th scope="col" className={styles.hidden}>
            Teléfono
          </th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((e) => (
          <tr key={e.id}>
            <td>{e.date}</td>
            <td>{e.time}</td>
            <td>{e.customer}</td>
            <td className={styles.hidden}>{e.phone}</td>
            <td>{e.status}</td>
            <td className={styles.buttonsCell}>
              <button className={styles.more}>
                <img
                  src="/ellipsis-solid-full.svg"
                  alt="more"
                  className={styles.icon}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
