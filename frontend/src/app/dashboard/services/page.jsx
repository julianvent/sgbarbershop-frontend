"use client";
import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";
import styles from "@/app/dashboard/styles.module.css";
import Table from "@/app/components/index_table/Table";
import { useRouter } from "next/navigation";


export default function Services() {
  const router = useRouter();
  const entries = [
  {
    "id": 1,
    "nombre": "Corte clásico",
    "descripcion": "Corte con tijera y máquina, estilo tradicional con acabado limpio.",
    "precio": 150.00,
    "duracion": 30,
    "tipo": "Corte"
  },
  {
    "id": 2,
    "nombre": "Corte degradado",
    "descripcion": "Corte con máquina en diferentes niveles para un efecto de degradado moderno.",
    "precio": 180.00,
    "duracion": 40,
    "tipo": "Corte"
  },
  {
    "id": 3,
    "nombre": "Afeitado tradicional",
    "descripcion": "Afeitado con navaja y toalla caliente para un acabado suave y profesional.",
    "precio": 120.00,
    "duracion": 25,
    "tipo": "Afeitado"
  },
  {
    "id": 4,
    "nombre": "Arreglo de barba",
    "descripcion": "Definición y perfilado de barba con máquina o navaja según preferencia.",
    "precio": 100.00,
    "duracion": 20,
    "tipo": "Barba"
  },
  {
    "id": 5,
    "nombre": "Tinte para cabello",
    "descripcion": "Aplicación de color para cubrir canas o cambiar el tono del cabello.",
    "precio": 250.00,
    "duracion": 60,
    "tipo": "Coloración"
  },
  {
    "id": 6,
    "nombre": "Limpieza facial",
    "descripcion": "Tratamiento facial básico para limpiar e hidratar la piel.",
    "precio": 200.00,
    "duracion": 45,
    "tipo": "Tratamiento"
  },
  {
    "id": 7,
    "nombre": "Corte infantil",
    "descripcion": "Corte para niños menores de 12 años, con técnica cuidadosa y paciencia.",
    "precio": 120.00,
    "duracion": 25,
    "tipo": "Corte"
  },
  {
    "id": 8,
    "nombre": "Corte y barba",
    "descripcion": "Paquete combinado de corte clásico y arreglo de barba.",
    "precio": 220.00,
    "duracion": 50,
    "tipo": "Combo"
  }
];
  return (
    <div className={styles.layoutContainer}>
      <Header></Header>
      <Sidebar></Sidebar>
      <main className={styles.mainLayoutContainer}>
            <div className={styles.layout}>
              <div className={styles.toolbar}>
                <h1>Servicios Disponibles</h1>
                <button className={styles.button} onClick={() => router.push('/dashboard/appointment')}>Programar cita</button>
              </div>
              <div className={styles.tableContainer}>
                <Table entries={entries} fields={[{name: 'Nombre', field: 'nombre'},{name: 'Precio', field:'precio' }]}></Table>
              </div>
            </div>
          
      </main>
    </div>
  );
}
