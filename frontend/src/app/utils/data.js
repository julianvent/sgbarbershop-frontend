// USE THIS FILE FOR FETCHING DATA FROM API

export const barbers = [
  { id: 1, name: "Kevin Frias Garcia", photo: "/kevin.png" },
  { id: 2, name: "Adrian Herrera Jeronimo", photo: "/kevin.png" },
  { id: 3, name: "Jose Julian Ventura Uscanga", photo: "/kevin.png" },
];

export const status = [
  { id: 1, name: "Pendiente por confirmar" },
  { id: 2, name: "Confirmada" },
  { id: 3, name: "Cancelada" },
  { id: 4, name: "Finalizada" },
];

export const appointments = [
  {
    id: 1,
    date: "18/10/2025",
    time: "12:10",
    customer: "Sebastian Hernandez",
    phone: "9211231234",
    status: "Confirmada",
  },
  {
    id: 2,
    date: "18/10/2025",
    time: "12:30",
    customer: "Kevin Frias",
    phone: "9211231234",
    status: "Confirmada",
  },
  {
    id: 3,
    date: "18/10/2025",
    time: "12:30",
    customer: "Adrian Herrera",
    phone: "9211231234",
    status: "Confirmada",
  },
];

export const appointments_fields = [
  {
    header: "Nombre",
    name: "customer",
  },
  {
    header: "Estado",
    name: "status",
  },
  {
    header: "Fecha",
    name: "date",
  },
  {
    header: "Hora",
    name: "time",
  },
];

export const appointments_actions = [
  {
    text: "Editar",
    base_url: "/appointments/",
  },
];

export const servicesEntries = [
  {
    id: 1,
    nombre: "Corte clásico",
    descripcion:
      "Corte con tijera y máquina, estilo tradicional con acabado limpio.",
    precio: 150.0,
    duracion: 30,
    tipo: "Corte",
  },
  {
    id: 2,
    nombre: "Corte degradado",
    descripcion:
      "Corte con máquina en diferentes niveles para un efecto de degradado moderno.",
    precio: 180.0,
    duracion: 40,
    tipo: "Corte",
  },
  {
    id: 3,
    nombre: "Afeitado tradicional",
    descripcion:
      "Afeitado con navaja y toalla caliente para un acabado suave y profesional.",
    precio: 120.0,
    duracion: 25,
    tipo: "Afeitado",
  },
  {
    id: 4,
    nombre: "Arreglo de barba",
    descripcion:
      "Definición y perfilado de barba con máquina o navaja según preferencia.",
    precio: 100.0,
    duracion: 20,
    tipo: "Barba",
  },
  {
    id: 5,
    nombre: "Tinte para cabello",
    descripcion:
      "Aplicación de color para cubrir canas o cambiar el tono del cabello.",
    precio: 250.0,
    duracion: 60,
    tipo: "Coloración",
  },
  {
    id: 6,
    nombre: "Limpieza facial",
    descripcion: "Tratamiento facial básico para limpiar e hidratar la piel.",
    precio: 200.0,
    duracion: 45,
    tipo: "Tratamiento",
  },
  {
    id: 7,
    nombre: "Corte infantil",
    descripcion:
      "Corte para niños menores de 12 años, con técnica cuidadosa y paciencia.",
    precio: 120.0,
    duracion: 25,
    tipo: "Corte",
  },
  {
    id: 8,
    nombre: "Corte y barba",
    descripcion: "Paquete combinado de corte clásico y arreglo de barba.",
    precio: 220.0,
    duracion: 50,
    tipo: "Combo",
  },
];

export const serviceFields = [
  {
    header: "Nombre",
    name: "nombre",
  },
  {
    header: "Precio",
    name: "precio",
  },
  {
    header: "Duracion Aproximada",
    name: "duracion",
  },
  {
    header: "Tipo",
    name: "tipo",
  },
];
