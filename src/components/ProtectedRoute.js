import { Navigate } from "react-router-dom";

// Componente ProtectedRoute: protege rutas privadas verificando autenticación
export default function ProtectedRoute({ children }) {
  // Verifica si el usuario está autenticado consultando localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // Si está autenticado, renderiza el contenido protegido
  return children;
}
