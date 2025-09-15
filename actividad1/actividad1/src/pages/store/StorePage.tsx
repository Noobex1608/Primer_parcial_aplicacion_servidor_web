import { useState } from "react";
import Button from "../../componentes/ui/Button";
import type { CartItem, Product } from "../../types";

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: "1",
      name: "Mancuernas Ajustables 20kg",
      description:
        "Set de mancuernas con peso ajustable, perfectas para entrenamientos en casa.",
      price: 149.99,
      category: "equipment",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
    {
      id: "2",
      name: "Camiseta Deportiva FitLife",
      description:
        "Camiseta transpirable de alta calidad para entrenamientos intensos.",
      price: 29.99,
      category: "clothing",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
    {
      id: "3",
      name: "Proteína Whey 2kg",
      description:
        "Proteína de suero de alta calidad para recuperación muscular.",
      price: 79.99,
      category: "supplements",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
    {
      id: "4",
      name: "Banda Elástica Set",
      description: "Set de 5 bandas elásticas de diferentes resistencias.",
      price: 24.99,
      category: "equipment",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
    {
      id: "5",
      name: "Shorts Deportivos",
      description:
        "Shorts cómodos y flexibles para cualquier tipo de entrenamiento.",
      price: 34.99,
      category: "clothing",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
    {
      id: "6",
      name: "Creatina Monohidrato",
      description: "Suplemento de creatina para mejorar fuerza y potencia.",
      price: 39.99,
      category: "supplements",
      image: "/api/placeholder/300/200",
      inStock: false,
    },
    {
      id: "7",
      name: "Botella de Agua Premium",
      description:
        "Botella térmica de acero inoxidable, mantiene la temperatura por 12 horas.",
      price: 19.99,
      category: "accessories",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
    {
      id: "8",
      name: "Guantes de Entrenamiento",
      description:
        "Guantes antideslizantes para proteger tus manos durante los entrenamientos.",
      price: 16.99,
      category: "accessories",
      image: "/api/placeholder/300/200",
      inStock: true,
    },
  ];

  const categories = [
    { id: "all", name: "Todos los productos" },
    { id: "equipment", name: "Equipamiento" },
    { id: "clothing", name: "Ropa deportiva" },
    { id: "supplements", name: "Suplementos" },
    { id: "accessories", name: "Accesorios" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tienda FitLife</h1>
          <p className="text-gray-600">
            Encuentra todo lo que necesitas para tu entrenamiento
          </p>
        </div>
        {getTotalItems() > 0 && (
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            <span className="font-semibold">
              Carrito: {getTotalItems()} productos
            </span>
            <span className="ml-2">${getTotalPrice().toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-gray-500">Imagen del producto</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.inStock
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.inStock ? "En stock" : "Agotado"}
                </span>
              </div>
              <Button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className="w-full"
              >
                {product.inStock ? "Agregar al carrito" : "No disponible"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron productos en esta categoría.
          </p>
        </div>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Resumen del carrito</h2>
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between items-center"
              >
                <span>
                  {item.product.name} x {item.quantity}
                </span>
                <span className="font-semibold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-4">Proceder al checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;
