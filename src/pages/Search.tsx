import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Search = () => {
  const query = useQuery();
  const q = (query.get("q") || "").toLowerCase();
  const { addItem } = useCart();

  const results = useMemo(() => {
    if (!q) return products;
    return products.filter((p) =>
      [p.name, p.category, p.description].some((f) => f.toLowerCase().includes(q))
    );
  }, [q]);

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`Search ${q ? `– ${q}` : "– All"} – SwiftShop`} description="Search SwiftShop catalog for electronics and accessories." />
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-semibold mb-6">Search results {q && <span className="text-muted-foreground">for "{q}"</span>}</h1>
        {results.length === 0 ? (
          <p className="text-muted-foreground">No products found. Try another keyword.</p>
        ) : (
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((p) => (
              <li key={p.id} className="group rounded-lg border bg-card p-3 hover:shadow-lg transition-shadow">
                <Link to={`/product/${p.id}`} className="block">
                  <div className="aspect-square overflow-hidden rounded-md">
                    <img src={p.image} alt={`${p.name} product image`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
        )}
      </main>
    </div>
  );
};

export default Search;
