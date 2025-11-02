import styles from "./Appointment-Table.module.css";

export default function AppointmentTable({ entries }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col" className={styles.customerColumn}>
            Cliente
          </th>
          <th scope="col" className={styles.hidden}>
            Teléfono
          </th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col" className={styles.actionsColumn}></th>
        </tr>
      </thead>
      <tbody>
        {entries.map((e) => (
          <tr key={e.id}>
            <td>{e.customer}</td>
            <td className={styles.hidden}>{e.phone}</td>
            <td>{e.status}</td>
            <td>{e.date}</td>
            <td>{e.time}</td>
            <td className={styles.actionsCell}>
              <ul className={styles.actions}>
                <li>
                  <button className={styles.actionsButton}>
                    <img
                      src="/ellipsis-solid-full.svg"
                      alt="more"
                      className={styles.icon}
                    />
                  </button>
                  <ul className={styles.actionsMenu}>
                    <li>
                      <a href="">Editar</a>
                    </li>
                    <li>
                      <a href="">Ver detalles</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
