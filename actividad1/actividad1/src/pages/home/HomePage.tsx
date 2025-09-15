import { Link } from "react-router-dom";
import Button from "../../componentes/ui/Button";

const HomePage = () => {
  const services = [
    {
      title: "Rutinas Personalizadas",
      description:
        "Entrenamientos diseñados específicamente para tus objetivos y nivel de condición física.",
      icon: "🏋️‍♂️",
    },
    {
      title: "Nutrición Profesional",
      description:
        "Planes de alimentación balanceados creados por nutricionistas especializados.",
      icon: "🥗",
    },
    {
      title: "Seguimiento de Progreso",
      description:
        "Monitorea tu evolución con métricas detalladas y gráficos de progreso.",
      icon: "📊",
    },
    {
      title: "Comunidad Activa",
      description:
        "Únete a una comunidad motivadora de personas con objetivos similares.",
      icon: "👥",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      text: "FitLife cambió completamente mi vida. Perdí 15 kilos y me siento más fuerte que nunca.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      text: "Las rutinas personalizadas son increíbles. He ganado masa muscular de forma saludable.",
      rating: 5,
    },
    {
      name: "Ana López",
      text: "La comunidad es muy supportiva. Siempre encuentro motivación para seguir adelante.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transforma Tu Vida con FitLife
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubre el poder de un estilo de vida saludable. Entrenamientos
            personalizados, nutrición profesional y una comunidad que te apoya
            en cada paso.
          </p>
          <div className="space-x-4">
            <Link to="/register">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Comienza Gratis
              </Button>
            </Link>
            <Link to="/subscriptions">
              <Button
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Ver Planes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                ¿Por qué elegir FitLife?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Entrenadores Certificados</h4>
                    <p className="text-gray-600">
                      Profesionales con años de experiencia en fitness y
                      nutrición.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Flexibilidad Total</h4>
                    <p className="text-gray-600">
                      Entrena cuando quieras, donde quieras, a tu ritmo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Resultados Garantizados</h4>
                    <p className="text-gray-600">
                      Miles de usuarios han alcanzado sus objetivos con
                      nosotros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Imagen: Personas entrenando
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros usuarios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8">
            Únete a miles de personas que ya están viviendo una vida más
            saludable y feliz.
          </p>
          <Link to="/register">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Comenzar Ahora - Es Gratis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
