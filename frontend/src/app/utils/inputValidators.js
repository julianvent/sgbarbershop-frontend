export const emailValidation = {
  id: "email",
  label: "Correo electrónico",
  type: "email",
  validation: {
    required: {
      value: true,
      message: "Requerido",
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Formato de correo inválido",
    },
  },
};

export const passwordValidation = {
  id: "password",
  label: "Contraseña",
  type: "password",
  validation: {
    required: {
      value: true,
      message: "Requerido",
    },
  },
};
