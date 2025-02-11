import "./App.css";
import { InputWithButton } from "./components/ui/InputWithButton";
import { TableDemo } from "../src/components/Tables";
import { CiDark, CiLight } from "react-icons/ci";
import { useState } from "react";
import { postPersona } from "./peticiones/crearPersona";
import { getPersonas } from "./peticiones/getPersonas";
import Alerta from "./components/Alerta";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [nombre, setNombre] = useState("");
  const [alerta, setAlerta] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [personas, setPersonas] = useState([]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const fetchPersonas = async () => {
    const data = await getPersonas();
    setPersonas(data);
  };

  const mostrarMensaje = (mensaje) => {
    setAlerta(mensaje);
    setMostrarAlerta(true);
  };

  const handleRegistrar = async () => {
    if (!nombre) {
      mostrarMensaje("El campo nombre es obligatorio");
      return;
    }

    const persona = { nombre };

    try {
      await postPersona(persona);
      setNombre("");
      await fetchPersonas();
      mostrarMensaje("Persona creada con éxito");
    } catch (error) {
      console.error("Error al registrar persona:", error);
      mostrarMensaje("Error al registrar la persona");
    }
  };

  const handleNombreChange = (e) => {
    const valor = e.target.value;
    const soloLetras = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    if (soloLetras.length <= 50) {
      setNombre(soloLetras);
    }
  };

  return (
    <>
      <main>
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? (
            <CiLight size={40} style={{ cursor: "pointer" }} />
          ) : (
            <CiDark size={40} style={{ cursor: "pointer" }} />
          )}
        </div>
        <div className="personas">
          <InputWithButton
            nombre={"Nombre"}
            type={"name"}
            value={nombre}
            onChange={handleNombreChange}
            nombreLabel={"Nombre"}
            buttonMessage={"Enviar"}
            click={handleRegistrar}
          />
          <TableDemo personas={personas} setPersonas={setPersonas} />
        </div>
        <Alerta
          mostrar={mostrarAlerta}
          Dialogo={alerta === "Persona creada con éxito" ? "¡Éxito!" : "Error"}
          Descripcion={alerta}
          cerrarAlerta={() => setMostrarAlerta(false)}
        />
      </main>
    </>
  );
}

export default App;