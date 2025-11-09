export const emailValidation = {
  id: "email",
  type: "email",
  name: "email",
  label: "Correo electrónico",
  validation: {
    required: "Requerido",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Formato de correo inválido",
    },
  },
};

export const passwordValidation = {
  id: "password",
  type: "password",
  name: "password",
  label: "Contraseña",
  validation: {
    required: "Requerido",
  },
};

export const nameValidation = {
  id: "name",
  type: "text",
  name: "name",
  label: "Nombre completo",
  validation: {
    required: "Requerido",
  },
};

export const customerNameValidation = {
  id: "customerName",
  type: "text",
  name: "customerName",
  label: "Nombre del cliente",
  validation: {
    required: "Requerido",
  },
};

export const phoneValidation = {
  id: "phone",
  type: "text",
  name: "phone",
  label: "Número telefónico",
  validation: {
    required: "Requerido",
    pattern: {
      value: /^\d{10}$/,
      message: "Teléfono incorrecto",
    },
  },
};

export const dateValidation = {
  id: "appointmentDate",
  type: "date",
  name: "appointmentDate",
  label: "Fecha de la cita",
  validation: {
    required: "Requerido",
  },
};

export const statusValidation = {
  id: "appointmentStatus",
  name: "appointmentStatus",
  label: "Estado de la cita",
  validation: {
    required: "Requerido",
  },
};

export const barberValidation = {
  id: "selectedBarber",
  validation: {
    required: "Selecciona un barbero",
  },
};

export const timeValidation = {
  id: "selectedTime",
  validation: {
    required: "Selecciona un horario",
  },
};

export const serviceValidation = {
  id: "selectedService",
  validation: {
    required: "Selecciona uno o más servicios",
  },
};
