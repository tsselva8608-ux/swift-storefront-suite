export const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} SwiftShop. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Support</a>
        </nav>
      </div>
    </footer>
  );
};
