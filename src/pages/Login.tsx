import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Connect Supabase to enable login",
      description: "Use the green Supabase button (top-right) to set up auth, then we’ll wire this form.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Login – SwiftShop" description="Sign in to manage orders and your profile." />
      <main className="container mx-auto py-16 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Welcome back</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button className="w-full" type="submit">Sign in</Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4">Don’t have an account? Sign up will be enabled after connecting Supabase.</p>
      </main>
    </div>
  );
};

export default Login;
