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
    // pattern: {
    //   value: /a/,
    //   message: "Formato de correo inválido",
    // },
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

export const scheduleValidation = {
  id: "appointmentSchedule",
  type: "time",
  name: "appointmentSchedule",
  label: "Hora de la cita",
  defaultValue: "12:00",
  validation: {
    required: "Requerido",
  },
};

export const statusValidation = {
  id: "appointmentStatus",
  name: "appointmentStatus",
  label: "Estado de la cita",
};
