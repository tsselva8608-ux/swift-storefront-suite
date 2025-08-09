import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile saving requires backend",
      description: "Connect Supabase to store and sync your profile securely.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Your Profile – SwiftShop" description="Manage your account details and addresses." />
      <main className="container mx-auto py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div role="alert" className="mb-6 rounded-md border bg-secondary p-3 text-sm text-secondary-foreground">
          Authentication and persistence will be enabled once Supabase is connected.
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="Jane" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="jane@example.com" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Main St" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="City" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP</Label>
            <Input id="zip" placeholder="10001" />
          </div>
          <div className="md:col-span-2 mt-2">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Profile;
