import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, subtotal, removeItem, clear } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Your Cart – SwiftShop" description="Review your cart items and proceed to checkout." />
      <main className="container mx-auto py-10 grid gap-8 grid-cols-1 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Shopping cart</h1>
          {items.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty. <Link to="/" className="underline">Start shopping</Link>.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 items-center rounded-md border p-3">
                  <img src={it.image} alt={`${it.name} thumbnail`} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{it.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {it.quantity}</p>
                  </div>
                  <p className="font-semibold mr-4">${((it.price * it.quantity)/100).toFixed(2)}</p>
                  <Button variant="outline" onClick={() => removeItem(it.id)}>Remove</Button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <aside className="space-y-4">
          <div className="rounded-md border p-4">
            <div className="flex justify-between mb-2"><span>Subtotal</span><span className="font-semibold">${(subtotal/100).toFixed(2)}</span></div>
            <p className="text-xs text-muted-foreground">Taxes and shipping calculated at checkout.</p>
            <div className="mt-4 space-y-2">
              <Link to="/checkout"><Button className="w-full" disabled={items.length===0}>Proceed to Checkout</Button></Link>
              <Button className="w-full" variant="secondary" onClick={clear} disabled={items.length===0}>Clear Cart</Button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Cart;
