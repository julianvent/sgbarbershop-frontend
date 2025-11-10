// USE THIS FILE FOR FETCHING DATA FROM API
export const account = { name: "Monkeybarber" };

export const barbers = [
  { id: 1, name: "Kevin Frias Garcia", photo: "/kevin2.png" },
  { id: 2, name: "Adrian Herrera Jeronimo", photo: "/kevin.png" },
  { id: 3, name: "Jose Julian Ventura Uscanga", photo: "/kevin.png" },
];

export const status = [
  { id: 1, name: "Pendiente por confirmar", value: "pending" },
  { id: 2, name: "Confirmada", value: "confirmed" },
  { id: 3, name: "Finalizada", value: "completed" },
  { id: 4, name: "Cancelada", value: "cancelled" },
];

export const appointments = [
  {
    id: 1,
    customer_name: "Sebastian Hernandez",
    customer_phone: "9211231234",
    appointment_date: "2025-10-18",
    appointment_time: "10:00",
    status: "confirmed",
    barber_id: "1",
    services: ["1", "2"],
  },
  {
    id: 2,
    customer_name: "Kevin Frias",
    customer_phone: "9211231234",
    appointment_date: "2025-10-18",
    appointment_time: "11:00",
    status: "confirmed",
    barber_id: "2",
    services: ["1", "2"],
  },
  {
    id: 3,
    customer_name: "Adrian Herrera",
    customer_phone: "9211231234",
    appointment_date: "2025-10-18",
    appointment_time: "11:45",
    status: "confirmed",
    barber_id: "3",
    services: ["1", "2"],
  },
];

export const appointments_fields = [
  {
    headerName: "Nombre",
    field: "customer_name",
  },
  {
    headerName: "Barbero asignado",
    field: "barber_name",
  },
  {
    headerName: "Estado",
    field: "status",
  },
  {
    headerName: "Horario programado",
    field: "date",
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
    name: "Corte clásico",
    descripcion:
      "Corte con tijera y máquina, estilo tradicional con acabado limpio.",
    precio: 150.0,
    duracion: 30,
    tipo: "Corte",
  },
  {
    id: 2,
    name: "Corte degradado",
    descripcion:
      "Corte con máquina en diferentes niveles para un efecto de degradado moderno.",
    precio: 180.0,
    duracion: 40,
    tipo: "Corte",
  },
  {
    id: 3,
    name: "Afeitado tradicional",
    descripcion:
      "Afeitado con navaja y toalla caliente para un acabado suave y profesional.",
    precio: 120.0,
    duracion: 25,
    tipo: "Afeitado",
  },
  {
    id: 4,
    name: "Arreglo de barba",
    descripcion:
      "Definición y perfilado de barba con máquina o navaja según preferencia.",
    precio: 100.0,
    duracion: 20,
    tipo: "Barba",
  },
  {
    id: 5,
    name: "Tinte para cabello",
    descripcion:
      "Aplicación de color para cubrir canas o cambiar el tono del cabello.",
    precio: 250.0,
    duracion: 60,
    tipo: "Coloración",
  },
  {
    id: 6,
    name: "Limpieza facial",
    descripcion: "Tratamiento facial básico para limpiar e hidratar la piel.",
    precio: 200.0,
    duracion: 45,
    tipo: "Tratamiento",
  },
  {
    id: 7,
    name: "Corte infantil",
    descripcion:
      "Corte para niños menores de 12 años, con técnica cuidadosa y paciencia.",
    precio: 120.0,
    duracion: 25,
    tipo: "Corte",
  },
  {
    id: 8,
    name: "Corte y barba",
    descripcion: "Paquete combinado de corte clásico y arreglo de barba.",
    precio: 220.0,
    duracion: 50,
    tipo: "Combo",
  },
];

export const defaultColDef = {
  resizable: true,
  sortable: true,
  flex: 2,
  minWidth: 100,
};

export const serviceFields = [
  {
    headerName: "Nombre",
    field: "name",
  },
  {
    headerName: "Precio",
    field: "precio",
  },
  {
    headerName: "Duracion Aproximada",
    field: "duracion",
  },
  {
    headerName: "Tipo",
    field: "tipo",
  },
];

export const timesAvailable = [
  { id: 1, hour: "10", minutes: "00" },
  { id: 2, hour: "10", minutes: "15" },
  { id: 3, hour: "10", minutes: "30" },
  { id: 4, hour: "10", minutes: "45" },
  { id: 5, hour: "11", minutes: "00" },
  { id: 6, hour: "11", minutes: "15" },
  { id: 7, hour: "11", minutes: "30" },
  { id: 8, hour: "11", minutes: "45" },
  { id: 9, hour: "12", minutes: "00" },
];
