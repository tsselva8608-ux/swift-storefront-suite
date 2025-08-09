import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <main className="container mx-auto py-16">
        <h1 className="text-2xl font-semibold mb-2">Product not found</h1>
        <p className="text-muted-foreground mb-6">Try browsing our catalog instead.</p>
        <Link to="/"><Button>Go Home</Button></Link>
      </main>
    );
  }

  const price = (product.price / 100).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${product.name} – SwiftShop`}
        description={product.description}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          image: [product.image],
          description: product.description,
          brand: "SwiftShop",
          aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: 120 },
          offers: { "@type": "Offer", priceCurrency: "USD", price: (product.price / 100).toFixed(2), availability: "https://schema.org/InStock" },
        }}
      />
      <main className="container mx-auto py-10 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img src={product.image} alt={`${product.name} detailed view`} className="h-full w-full object-cover" />
          </div>
        </div>
        <article>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.category}</p>
          <p className="text-2xl font-semibold mb-6">${price}</p>
          <p className="mb-8 text-foreground/80 leading-relaxed">{product.description}</p>
          <div className="flex gap-3">
            <Button onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}>Add to Cart</Button>
            <Link to="/cart"><Button variant="secondary">Go to Cart</Button></Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ProductDetail;
