"use client";
import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";
import styles from "./Layout.module.css";
import { useRef } from "react";

export default function Layout({ children }) {
  const sidebarRef = useRef(null);

  function onSidebarToggle() {
    const visibility = sidebarRef.current.getAttribute("data-visible");

    if (visibility === "false") {
      sidebarRef.current.setAttribute("data-visible", true);
    } else {
      sidebarRef.current.setAttribute("data-visible", false);
    }
  }

  return (
    <div className={styles.layoutContainer}>
      <Header onSidebarToggle={onSidebarToggle}></Header>
      <Sidebar
        ref={sidebarRef}
        className={styles.sidebar}
        data-visible="false"
      ></Sidebar>
      <main className={styles.mainLayoutContainer}>{children}</main>
    </div>
  );
}
