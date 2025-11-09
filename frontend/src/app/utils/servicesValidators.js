
export const durationValidation = {
  id:"duration",
  type: "number",
  name: "duration",
  label: "Duracion",
  validation: {
    required: "Ingrese la duración ",
    min: {
      value: 10,
      message: "El servicio debe durar mas de 10 minutos"
    },
  }
}

export const nameValidation = {
  id: "name",
  type: "text",
  name: "name",
  label: "Nombre del servicio",
  validation: {
    required: "Ingrese el nombre del servicio",
  },
};

export const priceValidation = {
  id: "price",
  type: "number",
  name: "price",
  label: "Precio",
  validation: {
    required: "Ingrese el precio"
  }
}

export const descriptionValidation = {
  id: "description",
  type: "text",
  name: "description",
  label: "Descripcion",
  validation: {
    required: "Ingrese una breve descripcion"
  }
}