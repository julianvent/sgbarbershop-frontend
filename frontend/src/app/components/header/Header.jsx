import Link from "next/link";
import styles from "./Header.module.css";
import { appointmentsRoute } from "@/app/utils/routes";
import { account } from "@/app/utils/data";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href={appointmentsRoute}>
          <h1>Sagoz - Barbershop</h1>
        </Link>
        <ul className={styles.dropdown}>
          <li>
            <figure>
              <img src="/circle-user-solid-full.svg" alt="" />
            </figure>
            <ul>
              <li>
                <a href="/">Cerrar sesión</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
