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
        <div className={styles.profileContainer}>
          <span>{account.name}</span>
          <ul className={styles.dropdown}>
            <li>
              <figure>
                <img src="/circle-user-solid-full.svg" alt="" />
              </figure>
              <ul>
                <li>
                  <Link href="/">
                    <div className={styles.iconContainer}>
                      <img
                        src="/icons/gear-solid-full.svg"
                        alt="sign-out-icon"
                      />
                    </div>
                    Configuración de la cuenta
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <div className={styles.iconContainer}>
                      <img
                        src="/icons/arrow-right-from-bracket-solid-full.svg"
                        alt="sign-out-icon"
                      />
                    </div>
                    Cerrar sesión
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
