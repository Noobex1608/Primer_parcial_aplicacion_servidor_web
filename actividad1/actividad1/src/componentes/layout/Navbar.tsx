import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          FitLife
        </Link>
        <div className="space-x-4 hidden md:block">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link to="/store" className="text-gray-700 hover:text-blue-600">
            Tienda
          </Link>
          <Link to="/support" className="text-gray-700 hover:text-blue-600">
            Asistencia
          </Link>
          <Link to="/subscriptions" className="text-gray-700 hover:text-blue-600">
            Subscripciones
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
