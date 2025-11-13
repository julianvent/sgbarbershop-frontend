import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/dashboard/appointments">Citas</Link>
        </li>
        <li>
          <Link href="/dashboard/services">Servicios</Link>
        </li>
        <li>
          <Link href="/dashboard/staff">Personal</Link>
        </li>
      </ul>
    </div>
  );
}
