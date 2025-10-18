import DashboardMenu from "../components/dashboard_menu/DashboardMenu";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <main className="">
        <DashboardMenu></DashboardMenu>
      </main>
      <Footer></Footer>
    </div>
  );
}
