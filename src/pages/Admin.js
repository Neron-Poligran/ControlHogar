import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  User,
  Plus,
  Edit,
  Trash,
  Check,
  X,
  AlertCircle,
  Menu,
} from "lucide-react";
import { servicesData } from "../data/services";

const Admin = () => {
  const [services, setServices] = useState(servicesData);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    availability: "",
    promotion: false,
    features: [""],
  });

  const resolveImg = (p) => {
    if (!p) return "";
    if (/^(https?:)?\/\//i.test(p)) return p;
    const base = process.env.PUBLIC_URL || "";
    const path = p.startsWith("/") ? p : `/${p}`;
    return `${base}${path}`;
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = (process.env.PUBLIC_URL || "") + "/";
  };

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingService) {
      setServices(
        services.map((service) =>
          service.id === editingService.id
            ? { ...formData, id: editingService.id }
            : service
        )
      );
      showMessage("Servicio actualizado con éxito");
    } else {
      const nextId = services.length
        ? Math.max(...services.map((s) => s.id)) + 1
        : 1;
      const newService = { ...formData, id: nextId };

      setServices([...services, newService]);
      showMessage("Servicio creado con éxito");
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      image: "",
      description: "",
      availability: "",
      promotion: false,
      features: [""],
    });
    setShowForm(false);
    setEditingService(null);
  };

  const handleEdit = (service) => {
    setFormData(service);
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este servicio?")) {
      setServices(services.filter((service) => service.id !== id));
      showMessage("Servicio eliminado con éxito");
    }
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ""],
    });
  };

  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  const removeFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const sidebarItems = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "services", name: "Servicios", icon: Settings },
    { id: "users", name: "Usuarios", icon: User },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.div
        className={`bg-white shadow-lg ${
          sidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 fixed h-full z-20 lg:relative lg:w-64`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-950 from-10% to-lime-500 to-100% rounded-xl">
              <Settings className="w-6 h-6 text-white" />
            </div>

            {(sidebarOpen || isDesktop) && (
              <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
            )}
          </div>

          {/* ✨ Botón X para cerrar en móvil, visible solo cuando el sidebar está abierto */}
          {sidebarOpen && (
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="absolute p-2 rounded-lg lg:hidden right-3 top-3 hover:bg-gray-100"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (!isDesktop) setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5" />
                {(sidebarOpen || isDesktop) && (
                  <span className="font-medium">{item.name}</span>
                )}
              </motion.button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-2 right-1">
          <motion.button
            onClick={handleLogout}
            className="w-full p-3 font-medium text-white transition-colors duration-300 bg-red-400 rounded-xl hover:bg-red-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {sidebarOpen || isDesktop ? "Cerrar Sesión" : "Salir"}
          </motion.button>
        </div>
      </motion.div>

      <div className="flex-1 ml-16 lg:ml-0">
        <div className="flex items-center justify-between p-4 bg-white shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {activeTab === "dashboard" && "Dashboard"}
            {activeTab === "services" && "Gestión de Servicios"}
            {activeTab === "users" && "Gestión de Usuarios"}
          </h1>
        </div>

        <div className="p-6">
          <AnimatePresence>
            {message && (
              <motion.div
                key="flash"
                className={`mb-6 p-4 rounded-xl flex items-center gap-2 ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {message.type === "success" ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="tab-dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
                  <div className="p-6 bg-white shadow-lg rounded-2xl">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Total Servicios
                    </h3>
                    <p className="text-3xl font-bold text-blue-600">
                      {services.length}
                    </p>
                  </div>
                  <div className="p-6 bg-white shadow-lg rounded-2xl">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      En Promoción
                    </h3>
                    <p className="text-3xl font-bold text-green-600">
                      {services.filter((s) => s.promotion).length}
                    </p>
                  </div>
                  <div className="p-6 bg-white shadow-lg rounded-2xl">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Disponibles
                    </h3>
                    <p className="text-3xl font-bold text-purple-600">
                      {services.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                key="tab-services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Lista de Servicios
                  </h2>
                  <motion.button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% rounded-xl hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5" />
                    Nuevo Servicio
                  </motion.button>
                </div>

                {showForm && (
                  <motion.div
                    className="p-6 mb-6 bg-white shadow-lg rounded-2xl"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="mb-4 text-lg font-bold text-gray-900">
                      {editingService ? "Editar Servicio" : "Nuevo Servicio"}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                          type="text"
                          placeholder="Nombre del servicio"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Precio (ej: Desde $500.000)"
                          value={formData.price}
                          onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value })
                          }
                          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <input
                        type="url"
                        placeholder="URL de la imagen"
                        value={formData.image}
                        onChange={(e) =>
                          setFormData({ ...formData, image: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />

                      <textarea
                        placeholder="Descripción del servicio"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        className="w-full h-24 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />

                      <input
                        type="text"
                        placeholder="Disponibilidad (ej: 5 instalaciones disponibles)"
                        value={formData.availability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            availability: e.target.value,
                          })
                        }
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="promotion"
                          checked={formData.promotion}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              promotion: e.target.checked,
                            })
                          }
                          className="w-4 h-4 text-blue-600"
                        />
                        <label
                          htmlFor="promotion"
                          className="font-medium text-gray-700"
                        >
                          En promoción
                        </label>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Características:
                        </label>
                        {formData.features.map((feature, index) => (
                          <div key={index} className="flex gap-2 mb-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) =>
                                updateFeature(index, e.target.value)
                              }
                              placeholder="Característica del servicio"
                              className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.features.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeFeature(index)}
                                className="p-3 text-red-500 hover:bg-red-50 rounded-xl"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addFeature}
                          className="font-medium text-blue-600 hover:text-blue-700"
                        >
                          + Agregar característica
                        </button>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          className="px-6 py-3 font-semibold text-white transition-colors duration-300 bg-green-500 rounded-xl hover:bg-green-600"
                        >
                          {editingService ? "Actualizar" : "Crear"}
                        </button>
                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-6 py-3 font-semibold text-white transition-colors duration-300 bg-gray-500 rounded-xl hover:bg-gray-600"
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">
                            Nombre
                          </th>
                          <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">
                            Precio
                          </th>
                          <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">
                            Disponibilidad
                          </th>
                          <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">
                            Promoción
                          </th>
                          <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {services.map((service) => (
                          <tr key={service.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={resolveImg(service.image)}
                                  alt={service.name}
                                  className="object-cover w-12 h-12 rounded-lg"
                                />
                                <span className="font-medium text-gray-900">
                                  {service.name}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {service.price}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {service.availability}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  service.promotion
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {service.promotion ? "Sí" : "No"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <motion.button
                                  onClick={() => handleEdit(service)}
                                  className="p-2 text-blue-600 transition-colors duration-300 rounded-lg hover:bg-blue-50"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDelete(service.id)}
                                  className="p-2 text-red-600 transition-colors duration-300 rounded-lg hover:bg-red-50"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Trash className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "users" && (
              <motion.div
                key="tab-users"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
                className="p-8 text-center bg-white shadow-lg rounded-2xl"
              >
                <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Gestión de Usuarios
                </h3>
                <p className="text-gray-600">
                  Esta funcionalidad estará disponible próximamente.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Admin;
