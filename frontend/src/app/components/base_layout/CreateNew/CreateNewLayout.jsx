import Header from "../../header/Header";
import styles from "./Create-New-Layout.module.css";
import Link from "next/link";

export default function CreateNewLayout({ title, returnRoute, children }) {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <main className={styles.scrollableContent}>
        <div className={styles.titleContainer}>
          <Link href={returnRoute}>
            <figure className={styles.return}>
              <img src="/arrow-left-solid-full.svg" alt="return" />
            </figure>
          </Link>
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}
