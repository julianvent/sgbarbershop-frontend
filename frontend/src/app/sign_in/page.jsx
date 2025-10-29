import LoginForm from "@/app/sign_in/sign_in_form/SignInForm";
import styles from "./Sign-In.module.css";

export default function Login() {
  return (
    <div className={styles.layout}>
      <div className={styles.hero}></div>
      <div className={styles.formContainer}>
        <main className={styles.main}>
          <h1>Barbershop</h1>
          <LoginForm></LoginForm>
          <div className={styles.signUpContainer}>
            <span>¿No tienes una cuenta?</span>
            <button>Regístrate</button>
          </div>
        </main>
      </div>
    </div>
  );
}
