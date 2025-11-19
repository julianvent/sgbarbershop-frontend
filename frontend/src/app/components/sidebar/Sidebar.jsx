import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar({ ref, className }) {
  return (
    <div ref={ref} className={`${styles.sidebar} ${className}`}>
      <ul>
        <li>
          <Link href="/dashboard/appointments">
            <div className={styles.iconContainer}>
              <img src="/icons/calendar-check-regular-full.svg" alt="" />
            </div>
            <span>Citas</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/services">
            <div className={styles.iconContainer}>
              <img src="/icons/scissors-solid-full.svg" alt="" />
            </div>
            <span>Servicios</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/staff">
            <div className={styles.iconContainer}>
              <img src="/icons/users-solid-full.svg" alt="" />
            </div>
            <span>Personal</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
