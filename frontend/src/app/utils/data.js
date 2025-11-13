// USE THIS FILE FOR FETCHING DATA FROM API

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


export const servicesEntries = [
  {
    id: 1,
    name: "Corte clásico",
    descripcion:
      "Corte con tijera y máquina, estilo tradicional con acabado limpio.",
    precio: 150.0,
    duracion: 30,
    tipo: "Corte",
    status: 'inactive'
  },
  {
    id: 2,
    name: "Corte degradado",
    descripcion:
      "Corte con máquina en diferentes niveles para un efecto de degradado moderno.",
    precio: 180.0,
    duracion: 40,
    tipo: "Corte",
    status: 'inactive'
  },
  {
    id: 3,
    name: "Afeitado tradicional",
    descripcion:
      "Afeitado con navaja y toalla caliente para un acabado suave y profesional.",
    precio: 120.0,
    duracion: 25,
    tipo: "Afeitado",
    status: 'active'
  },
  {
    id: 4,
    name: "Arreglo de barba",
    descripcion:
      "Definición y perfilado de barba con máquina o navaja según preferencia.",
    precio: 100.0,
    duracion: 20,
    tipo: "Barba",
    status: 'active'
  },
  {
    id: 5,
    name: "Tinte para cabello",
    descripcion:
      "Aplicación de color para cubrir canas o cambiar el tono del cabello.",
    precio: 250.0,
    duracion: 60,
    tipo: "Coloración",
    status: 'active'
  },
  {
    id: 6,
    name: "Limpieza facial",
    descripcion: "Tratamiento facial básico para limpiar e hidratar la piel.",
    precio: 200.0,
    duracion: 45,
    tipo: "Tratamiento",
    status: 'active'
  },
  {
    id: 7,
    name: "Corte infantil",
    descripcion:
      "Corte para niños menores de 12 años, con técnica cuidadosa y paciencia.",
    precio: 120.0,
    duracion: 25,
    tipo: "Corte",
    status: 'active'
  },
  {
    id: 8,
    name: "Corte y barba",
    descripcion: "Paquete combinado de corte clásico y arreglo de barba.",
    precio: 220.0,
    duracion: 50,
    tipo: "Combo",
    status: 'active'
  },
  {
    id: 9,
    name: 'Paquete reacondicionamiento',
    descripcion: `
          <p>
        Este paquete incluye un servicio completo de reacondicionamiento, ideal para renovar tu estilo.
        Se realiza un corte de precisión, arreglo de barba y diseño de grecas, utilizando productos de alta calidad.
      </p>

      <h3 style="font-size:1.1rem; margin-top:4rem;">Servicios que incluye</h3>

      <table style="border-collapse:collapse; width:100%; font-family:Arial, sans-serif; margin-top:0.5rem;">
        <tbody>
          <tr>
            <td style="padding:6px 8px; width:120px; font-weight:600;">Barba</td>
            <td style="padding:6px 8px;">
              Perfilado, recorte y humectación de barba con toalla caliente.
            </td>
          </tr>
          <tr>
            <td style="padding:6px 8px; width:120px; font-weight:600;">Corte</td>
            <td style="padding:6px 8px;">
              Corte con máquina y tijera, terminado limpio y peinado clásico o moderno.
            </td>
          </tr>
          <tr>
            <td style="padding:6px 8px; width:120px; font-weight:600;">Grecas</td>
            <td style="padding:6px 8px;">
              Diseño de líneas o figuras con precisión y acabado profesional.
            </td>
          </tr>
        </tbody>
      </table>
  `,
    precio: 470.0,
    duracion: 75,
    tipo: "Paquete",
    status: 'active'
  }
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

export const indexBarbers = [
  { 
    id: 1, 
    name: "Kevin", 
    last_names: "Frias Garcia",
    phone: "555-123-4567",
    email: "kevin@example.com",
    status: "inactive",
    photo: "/kevin2.png" 
  },
  { 
    id: 2, 
    name: "Adrian", 
    last_names: "Herrera Jeronimo",
    phone: "555-234-5678",
    email: "adrian@example.com",
    status: "active",
    photo: "/kevin.png" 
  },
  { 
    id: 3, 
    name: "Jose", 
    last_names: "Ventura Uscanga",
    phone: "555-345-6789",
    email: "jose@example.com",
    status: "active",
    photo: "/kevin.png" 
  },
];

