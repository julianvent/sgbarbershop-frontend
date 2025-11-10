import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="./appointments">
            <div className={styles.iconContainer}>
              <img src="/icons/calendar-check-regular-full.svg" alt="" />
            </div>
            Citas
          </Link>
        </li>
        <li>
          <Link href="./services">
            <div className={styles.iconContainer}>
              <img src="/icons/scissors-solid-full.svg" alt="" />
            </div>
            Servicios
          </Link>
        </li>
        <li>
          <Link href="./staff">
            <div className={styles.iconContainer}>
              <img src="/icons/users-solid-full.svg" alt="" />
            </div>
            Personal
          </Link>
        </li>
      </ul>
    </div>
  );
}
