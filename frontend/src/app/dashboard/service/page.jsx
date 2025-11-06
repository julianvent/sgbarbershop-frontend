'use client';
import Header from "@/app/components/header/Header";
import styles from "@/app/dashboard/styles.module.css";
import ServiceForm from "@/app/dashboard/service/ServiceForm/ServiceForm";

export default function Service(){
    return (
        <div>
            <Header></Header>
            <div className={styles.layout}>
                <ServiceForm></ServiceForm>

            </div>
        </div>
        
    )
}