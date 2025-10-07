import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

// Basename dinámico: en prod usa PUBLIC_URL (/ControlHogar), en dev queda vacío (/)
const base =
  process.env.NODE_ENV === "production"
    ? new URL(process.env.PUBLIC_URL, window.location.origin).pathname.replace(
        /\/$/,
        ""
      )
    : "";
// Layout principal: incluye Navbar, animación de transición y Footer
function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Barra de navegación superior */}
      <main>
        {/* Animación de transición entre páginas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet /> {/* Renderiza la página correspondiente a la ruta */}
        </motion.div>
      </main>
      <Footer /> {/* Pie de página */}
    </div>
  );
}

// Componente principal App: define las rutas de la aplicación
export default function App() {
  return (
    <BrowserRouter basename={base}>
      <Routes>
        {/* Rutas públicas que usan el layout principal */}
        <Route element={<Layout />}>
          {/* Página de inicio */}
          <Route index element={<Home />} /> 
          {/* Catálogo de servicios */}
          <Route path="servicios" element={<Services />} />  
            {/* Detalle de servicio */}
          <Route path="servicio/:id" element={<ServiceDetail />} />
        </Route>

        {/* Rutas fuera del layout si quieres (login/admin) */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute> {/* Protege la ruta admin, requiere autenticación */}
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Cualquier otra cosa, al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
