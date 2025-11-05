"use client";

import DashboardMenu from "../components/dashboard_menu/DashboardMenu";
import Header from "../components/header/Header";
import styles from "./Dashboard.module.css";
import Sidebar from "../components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <Sidebar></Sidebar>
       <main className={styles.mainLayout}>
        <DashboardMenu></DashboardMenu>
      </main>
    </div>
  );
}
