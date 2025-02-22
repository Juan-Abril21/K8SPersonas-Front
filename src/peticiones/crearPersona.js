export const postPersona = async (persona) => {
  const url = " http://174.138.127.244/backend/api/personas/crearPersona";
  console.log("Agregando cliente", persona);
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(persona),
  });

  if (resp.ok) {
    console.log("El cliente se ha agregado correctamente");
  } else {
    console.error("Error al agregar el cliente");
  }
};
