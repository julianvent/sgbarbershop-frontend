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

const confirmPasswordValidation = {
  id: "confirmPassword",
  type: "password",
  name: "confirmPassword",
  label: "Confirmar contraseña",
  validation: {
    required: "Requerido",
    validate: (value) => {
      if (watch("password") != value) {
        return "Las contraseñas no coinciden";
      }
    },
  },
};
