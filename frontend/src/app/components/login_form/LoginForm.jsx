"use client";

import styles from "./Login-Form.module.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault()
    await new Promise((res) => setTimeout(res, 700));
    router.push("/");
  }

  return (
    <div className={styles.formContainer}>
      <main>
        <h1>SG Barbershop</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.fieldsContainer}>
            <div className={styles.field}>
              <label htmlFor="email">Correo</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" />
            </div>
            <input type="submit" value="Iniciar sesión" />
          </div>
        </form>
      </main>
    </div>
  );
}
