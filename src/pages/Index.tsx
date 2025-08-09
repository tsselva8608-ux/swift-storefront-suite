import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Seo title="SwiftShop – Premium Electronics" description="Shop laptops, headphones, cameras and wearables. Fast checkout and modern design." />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-60" aria-hidden="true" />
        <img src={hero} alt="Premium electronics showcase hero" className="w-full h-[46vh] md:h-[60vh] object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 container mx-auto pb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Your next favorite gadgets</h1>
          <p className="text-muted-foreground max-w-2xl mb-6">Discover curated tech that elevates your day — from ultrabooks to studio-grade audio.</p>
          <div className="flex gap-3">
            <Link to="#catalog"><Button variant="hero">Shop Featured</Button></Link>
            <Link to="/search"><Button variant="secondary">Browse All</Button></Link>
          </div>
        </div>
      </section>

      <main id="catalog" className="container mx-auto py-12">
        <h2 className="sr-only">Featured products</h2>
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.id} className="group rounded-lg border bg-card p-3 hover:shadow-lg transition-shadow">
              <Link to={`/product/${p.id}`} className="block">
                <div className="aspect-square overflow-hidden rounded-md">
                  <img src={p.image} alt={`${p.name} product photo`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="font-medium leading-tight">{p.name}</h3>
                  <p className="text-muted-foreground text-sm">{p.category}</p>
                  <p className="font-semibold">${(p.price/100).toFixed(2)}</p>
                </div>
              </Link>
              <div className="mt-3">
                <Button onClick={() => addItem({ id: p.id, name: p.name, price: p.price, image: p.image })} className="w-full">Add to Cart</Button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Index;
