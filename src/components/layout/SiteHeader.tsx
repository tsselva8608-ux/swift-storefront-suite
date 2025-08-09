import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export const SiteHeader = () => {
  const { count } = useCart();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center gap-4">
        <Link to="/" className="font-bold text-lg">
          SwiftShop
        </Link>
        <form onSubmit={onSearch} className="hidden md:flex flex-1 items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="pl-10"
              aria-label="Search products"
            />
          </div>
          <Button type="submit" variant="secondary">Search</Button>
        </form>
        <nav className="ml-auto flex items-center gap-2">
          <Link to="/login" aria-label="Account" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
            <User />
            <span className="hidden sm:inline">Account</span>
          </Link>
          <Link to="/cart" className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
            <ShoppingCart />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-1 rounded-full bg-primary text-primary-foreground text-xs h-5 min-w-[1.25rem] px-1 grid place-items-center">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
      <div className="md:hidden border-t">
        <form onSubmit={onSearch} className="container mx-auto p-3 flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="pl-10"
              aria-label="Search products"
            />
          </div>
          <Button type="submit" variant="secondary">Go</Button>
        </form>
      </div>
    </header>
  );
};
