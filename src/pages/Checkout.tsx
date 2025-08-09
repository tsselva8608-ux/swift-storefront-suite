import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, subtotal } = useCart();

  const onPay = () => {
    toast({
      title: "Stripe setup required",
      description: "Set your Stripe Secret Key in an edge function. Then we’ll redirect to Stripe Checkout.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Checkout – SwiftShop" description="Complete your purchase securely." />
      <main className="container mx-auto py-10 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        {items.length === 0 ? (
          <p className="text-muted-foreground">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <h2 className="font-semibold mb-2">Order Summary</h2>
              <ul className="text-sm space-y-1">
                {items.map((it) => (
                  <li key={it.id} className="flex justify-between"><span>{it.name} × {it.quantity}</span><span>${((it.price*it.quantity)/100).toFixed(2)}</span></li>
                ))}
              </ul>
              <div className="flex justify-between mt-3 text-base font-semibold">
                <span>Total</span>
                <span>${(subtotal/100).toFixed(2)}</span>
              </div>
            </div>
            <Button onClick={onPay} className="w-full" variant="hero">Pay now</Button>
            <p className="text-xs text-muted-foreground">By placing your order, you agree to our Terms and Privacy Policy.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
