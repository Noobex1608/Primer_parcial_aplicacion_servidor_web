const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FitLife. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
