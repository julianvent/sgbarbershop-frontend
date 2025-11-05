import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="./appointments">Citas</Link>
        </li>
        <li>
          <Link href="./services">Servicios</Link>
        </li>
        <li>
          <Link href="./bundles">Paquetes</Link>
        </li>
        <li>
          <Link href="./staff">Personal</Link>
        </li>
      </ul>
    </div>
  );
}
