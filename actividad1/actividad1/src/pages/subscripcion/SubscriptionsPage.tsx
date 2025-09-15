import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../componentes/ui/Button";
import type { Subscription } from "../../types";

const SubscriptionsPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const subscriptions: Subscription[] = [
    {
      id: "1",
      name: "Plan Básico",
      description: "Perfecto para comenzar tu viaje fitness",
      price: billingCycle === "monthly" ? 9.99 : 99.99,
      duration: billingCycle,
      features: [
        "Acceso a rutinas básicas",
        "Artículos del blog",
        "Seguimiento básico de progreso",
        "Soporte por email",
        "Acceso a la comunidad",
      ],
    },
    {
      id: "2",
      name: "Plan Pro",
      description: "La opción más popular para usuarios comprometidos",
      price: billingCycle === "monthly" ? 19.99 : 199.99,
      duration: billingCycle,
      popular: true,
      features: [
        "Todo del Plan Básico",
        "Rutinas personalizadas",
        "Plan de nutrición personalizado",
        "Seguimiento avanzado de métricas",
        "Descuentos del 15% en la tienda",
        "Acceso prioritario a nuevas funciones",
        "Consultas mensuales con entrenadores",
      ],
    },
    {
      id: "3",
      name: "Plan Elite",
      description: "Experiencia premium con coaching personalizado",
      price: billingCycle === "monthly" ? 39.99 : 399.99,
      duration: billingCycle,
      features: [
        "Todo del Plan Pro",
        "Coaching 1-a-1 semanal",
        "Videollamadas con nutricionista",
        "Rutinas completamente personalizadas",
        "Descuentos del 25% en la tienda",
        "Acceso VIP a eventos exclusivos",
        "Soporte prioritario 24/7",
        "Análisis corporal mensual",
      ],
    },
  ];

  const getSavingsPercentage = () => {
    return Math.round(((12 - 10) / 12) * 100); // Aproximadamente 17% de ahorro
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Elige tu plan perfecto</h1>
        <p className="text-xl text-gray-600 mb-8">
          Comienza tu transformación hoy con el plan que mejor se adapte a tus
          objetivos
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4">
          <span
            className={`text-sm ${
              billingCycle === "monthly" ? "font-semibold" : "text-gray-500"
            }`}
          >
            Mensual
          </span>
          <button
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            aria-label="Cambiar ciclo de facturación"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              billingCycle === "yearly" ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm ${
              billingCycle === "yearly" ? "font-semibold" : "text-gray-500"
            }`}
          >
            Anual
          </span>
          {billingCycle === "yearly" && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Ahorra {getSavingsPercentage()}%
            </span>
          )}
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {subscriptions.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-b-lg text-sm font-medium">
                Más Popular
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">
                  /{billingCycle === "monthly" ? "mes" : "año"}
                </span>
                {billingCycle === "yearly" && (
                  <div className="text-sm text-green-600 font-medium">
                    ${(plan.price / 12).toFixed(2)}/mes
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/register">
                <Button
                  className={`w-full py-3 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  Comenzar {plan.name}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Preguntas Frecuentes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">
              ¿Puedo cambiar de plan en cualquier momento?
            </h4>
            <p className="text-gray-600 text-sm">
              Sí, puedes actualizar o degradar tu plan en cualquier momento
              desde tu panel de usuario.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">¿Hay garantía de devolución?</h4>
            <p className="text-gray-600 text-sm">
              Ofrecemos una garantía de 30 días. Si no estás satisfecho, te
              devolvemos tu dinero.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              ¿Los planes incluyen equipamiento?
            </h4>
            <p className="text-gray-600 text-sm">
              Los planes incluyen rutinas que puedes hacer en casa o en el
              gimnasio. El equipamiento se vende por separado.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              ¿Puedo pausar mi suscripción?
            </h4>
            <p className="text-gray-600 text-sm">
              Sí, puedes pausar tu suscripción por hasta 3 meses sin perder tu
              progreso.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          ¿Tienes preguntas sobre nuestros planes?
        </p>
        <Link to="/support">
          <Button variant="secondary">Contactar Soporte</Button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
