import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
// Crea el punto de entrada principal de la aplicación React
const root = createRoot(document.getElementById("root"));
// Renderiza la aplicación dentro de StrictMode para detectar posibles problemas
root.render(
  <StrictMode>
    <App /> {/* Componente principal de la aplicación */}
  </StrictMode>
);
