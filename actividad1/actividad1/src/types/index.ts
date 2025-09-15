// Tipos de datos para la aplicación FitLife

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "equipment" | "clothing" | "supplements" | "accessories";
  image: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Subscription {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: "monthly" | "yearly";
  features: string[];
  popular?: boolean;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  duration: number; // en minutos
  difficulty: "beginner" | "intermediate" | "advanced";
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  restTime: number; // en segundos
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}
