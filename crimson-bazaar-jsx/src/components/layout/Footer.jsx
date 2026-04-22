import { Link } from "react-router-dom";
import { Store, Facebook, Twitter, Instagram, Github } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";

const Footer = () => {
  const { meta } = useCatalog();
  const storeName = meta?.storeName || "Crimson Bazaar";
  const storeParts = storeName.split(" ");
  const brandLead = storeParts.shift() || storeName;
  const brandTail = storeParts.join(" ");

  return <footer className="mt-24 border-t border-border bg-surface/40">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <div className="size-9 rounded-lg gradient-primary grid place-items-center shadow-glow">
            <Store className="size-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">{brandLead}{brandTail ? <><span> </span><span className="text-gradient">{brandTail}</span></> : null}</span>
        </Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-xs">A multi-vendor marketplace for premium goods from independent stores worldwide.</p>
        <div className="flex gap-3 mt-5">
          {[Facebook, Twitter, Instagram, Github].map((Icon, i) =>
        <a key={i} href="#" className="p-2 rounded-full bg-card hover:gradient-primary hover:text-primary-foreground transition-smooth" aria-label="social"><Icon className="size-4" /></a>
        )}
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Shop</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/shop" className="hover:text-primary transition-smooth">All Products</Link></li>
          <li><Link to="/vendors" className="hover:text-primary transition-smooth">Vendors</Link></li>
          <li><Link to="/wishlist" className="hover:text-primary transition-smooth">Wishlist</Link></li>
          <li><Link to="/cart" className="hover:text-primary transition-smooth">Cart</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary transition-smooth">About</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
          <li><Link to="/become-vendor" className="hover:text-primary transition-smooth">Sell with us</Link></li>
          <li><Link to="/dashboard" className="hover:text-primary transition-smooth">Vendor Dashboard</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Newsletter</h4>
        <p className="text-sm text-muted-foreground mb-3">Get exclusive offers in your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
          <input type="email" placeholder="you@email.com" className="flex-1 bg-background border border-border rounded-md px-3 h-10 text-sm outline-none focus:border-primary transition-smooth" />
          <button className="px-4 h-10 rounded-md gradient-primary text-primary-foreground text-sm font-semibold hover-glow transition-smooth">Join</button>
        </form>
      </div>
    </div>
    <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} {storeName}. Crafted with passion.
    </div>
  </footer>;
};


export default Footer;