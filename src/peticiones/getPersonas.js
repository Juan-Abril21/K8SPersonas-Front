export async function getPersonas() {
  const url = ` http://174.138.127.244/backend/api/personas/obtenerTodos`;
  const resp = await fetch(url);
  const data = await resp.json();
  const personasLista = data.map((persona) => ({
    ID: persona.id,
    nombre: persona.nombre,
  }));
  return personasLista;
}
