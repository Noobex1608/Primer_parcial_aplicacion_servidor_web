import { useState } from "react";
import Button from "../../componentes/ui/Button";
import Input from "../../componentes/ui/Input";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: "¿Cómo puedo cancelar mi suscripción?",
      answer:
        "Puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario en la sección 'Mi cuenta > Suscripción'. También puedes contactarnos directamente.",
    },
    {
      question: "¿Necesito equipamiento especial?",
      answer:
        "Nuestras rutinas están diseñadas para adaptarse a tu situación. Tenemos entrenamientos sin equipamiento, con equipamiento básico y para gimnasio completo.",
    },
    {
      question: "¿Los planes de nutrición son personalizados?",
      answer:
        "Sí, en los planes Pro y Elite incluimos planes de nutrición personalizados basados en tus objetivos, restricciones alimentarias y preferencias.",
    },
    {
      question: "¿Hay descuentos para estudiantes?",
      answer:
        "Sí, ofrecemos un descuento del 25% para estudiantes. Contacta nuestro soporte con tu credencial estudiantil válida.",
    },
    {
      question: "¿Puedo usar la app en múltiples dispositivos?",
      answer:
        "Sí, puedes acceder a tu cuenta desde cualquier dispositivo con tu email y contraseña. Tu progreso se sincroniza automáticamente.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Mensaje enviado correctamente. Te responderemos pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Centro de Ayuda</h1>
        <p className="text-xl text-gray-600">
          Estamos aquí para ayudarte. Encuentra respuestas o contáctanos
          directamente.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nombre completo"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Correo electrónico"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Asunto"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe tu consulta o problema..."
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar mensaje
            </Button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-4">Otras formas de contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">📧</span>
                <span>soporte@fitlife.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">🕒</span>
                <span>Lun-Vie: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border rounded-lg">
                <summary className="p-4 cursor-pointer font-medium hover:bg-gray-50">
                  {faq.question}
                </summary>
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Help */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="font-semibold mb-2">Comenzar</h3>
          <p className="text-sm text-gray-600 mb-4">
            Guías rápidas para configurar tu cuenta y comenzar a entrenar.
          </p>
          <Button variant="secondary" className="text-sm">
            Ver guías
          </Button>
        </div>

        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="font-semibold mb-2">Consejos</h3>
          <p className="text-sm text-gray-600 mb-4">
            Tips y trucos para aprovechar al máximo tu experiencia FitLife.
          </p>
          <Button variant="secondary" className="text-sm">
            Ver consejos
          </Button>
        </div>

        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <div className="text-3xl mb-4">🏆</div>
          <h3 className="font-semibold mb-2">Comunidad</h3>
          <p className="text-sm text-gray-600 mb-4">
            Únete a nuestra comunidad para motivación y apoyo constante.
          </p>
          <Button variant="secondary" className="text-sm">
            Unirse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
