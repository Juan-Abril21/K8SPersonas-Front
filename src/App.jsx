import "./App.css";
import { InputWithButton } from "./components/ui/InputWithButton";
import { TableDemo } from "../src/components/Tables";
import { CiDark, CiLight } from "react-icons/ci";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
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
          nombreLabel={"Nombre"}
          buttonMessage={"Enviar"}
        />
        <TableDemo />
      </div>
    </>
  );
}

export default App;
