import laptop from "@/assets/product-laptop.jpg";
import headphones from "@/assets/product-headphones.jpg";
import watch from "@/assets/product-watch.jpg";
import camera from "@/assets/product-camera.jpg";

export type Product = {
  id: string;
  name: string;
  price: number; // in cents
  rating: number; // 0-5
  image: string;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Ultrabook Pro 14",
    price: 129999,
    rating: 4.7,
    image: laptop,
    description: "A featherweight powerhouse with a stunning 14" + "\u2033" + " display and all-day battery.",
    category: "Laptops",
  },
  {
    id: "2",
    name: "Auraluxe Headphones",
    price: 29999,
    rating: 4.6,
    image: headphones,
    description: "Immersive sound with active noise cancellation and premium comfort.",
    category: "Audio",
  },
  {
    id: "3",
    name: "Pulse Smartwatch X",
    price: 24999,
    rating: 4.4,
    image: watch,
    description: "Health, fitness, and productivity in a sleek, durable design.",
    category: "Wearables",
  },
  {
    id: "4",
    name: "Vista Mirrorless 6K",
    price: 189999,
    rating: 4.8,
    image: camera,
    description: "Capture stunning detail and dynamic range with a compact body.",
    category: "Cameras",
  },
];
