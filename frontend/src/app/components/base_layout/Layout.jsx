"use client";
import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";
import styles from "@/app/dashboard/styles.module.css";

export default function Layout({children}) {

  return (
    <div className={styles.layoutContainer}>
      <Header></Header>
      <Sidebar></Sidebar>
      <main className={styles.mainLayoutContainer}>
        {children}
      </main>
    </div>
  );
}
