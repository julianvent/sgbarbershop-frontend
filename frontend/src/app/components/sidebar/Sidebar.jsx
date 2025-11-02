import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <a href="./appointments">Citas</a>
        </li>
        <li>
          <a href="./services">Servicios</a>
        </li>
        <li>
          <a href="">Paquetes</a>
        </li>
        <li>
          <a href="">Personal</a>
        </li>
      </ul>
    </div>
  );
}
