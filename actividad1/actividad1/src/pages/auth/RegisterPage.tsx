import Button from "../../componentes/ui/Button";
import Input from "../../componentes/ui/Input";

const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
      <form className="space-y-4">
        <Input label="Nombre completo" required />
        <Input label="Correo electrónico" type="email" required />
        <Input label="Contraseña" type="password" required />
        <Button type="submit" className="w-full">
          Crear cuenta
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
