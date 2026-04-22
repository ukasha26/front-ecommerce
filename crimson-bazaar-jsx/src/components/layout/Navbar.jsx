import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X, Search, Store, ChevronDown, Cpu, Shirt, Home as HomeIcon, Sparkles, Dumbbell, BookOpen, Gamepad2, UtensilsCrossed, ToyBrick, Car, Headphones, Watch, Package } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCatalog } from "@/context/CatalogContext";
import { useStore } from "@/context/StoreContext";

const iconMap = { Cpu, Shirt, Home: HomeIcon, Sparkles, Dumbbell, BookOpen, Gamepad2, UtensilsCrossed, ToyBrick, Car, Headphones, Watch };

const links = [
{ to: "/", label: "Home" },
{ to: "/shop", label: "Shop" },
{ to: "/vendors", label: "Vendors" },
{ to: "/about", label: "About" },
{ to: "/contact", label: "Contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { categories, meta } = useCatalog();
  const { cartCount, wishlist, user } = useStore();
  const navigate = useNavigate();
  const storeName = meta?.storeName || "Crimson Bazaar";
  const storeParts = storeName.split(" ");
  const brandLead = storeParts.shift() || storeName;
  const brandTail = storeParts.join(" ");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(q)}`);
    setOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-smooth ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-lg gradient-primary grid place-items-center shadow-glow group-hover:animate-glow-pulse">
            <Store className="size-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            {brandLead}
            {brandTail ? <><span> </span><span className="text-gradient">{brandTail}</span></> : null}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
          <Link key={l.to} to={l.to} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth relative group">
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          )}
          <div className="relative group">
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth inline-flex items-center gap-1">
              Categories <ChevronDown className="size-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="glass border border-border rounded-2xl shadow-elegant p-3 w-[420px] grid grid-cols-2 gap-1">
                {categories.map((c) => {
                  const Icon = iconMap[c.icon] || Package;
                  return (
                    <Link key={c.id} to={`/shop?category=${c.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface group/item transition-smooth">
                      <div className="size-9 rounded-lg bg-surface border border-border grid place-items-center group-hover/item:gradient-primary group-hover/item:border-transparent transition-smooth">
                        <Icon className="size-4 text-primary group-hover/item:text-primary-foreground transition-smooth" />
                      </div>
                      <span className="text-sm font-medium">{c.name}</span>
                    </Link>);

                })}
              </div>
            </div>
          </div>
        </nav>

        <form onSubmit={submitSearch} className="hidden md:flex items-center bg-surface/60 border border-border rounded-full px-3 h-10 w-64">
          <Search className="size-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="bg-transparent outline-none text-sm px-2 flex-1" />
        </form>

        <div className="flex items-center gap-1">
          <Link to="/wishlist" className="relative p-2 rounded-full hover:bg-surface transition-smooth">
            <Heart className="size-5" />
            {wishlist.length > 0 && <span className="absolute -top-0.5 -right-0.5 size-4 text-[10px] grid place-items-center rounded-full gradient-primary text-primary-foreground font-bold">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-surface transition-smooth">
            <ShoppingCart className="size-5" />
            {cartCount > 0 && <span className="absolute -top-0.5 -right-0.5 size-4 text-[10px] grid place-items-center rounded-full gradient-primary text-primary-foreground font-bold">{cartCount}</span>}
          </Link>
          <Link to={user ? "/dashboard" : "/login"} className="p-2 rounded-full hover:bg-surface transition-smooth hidden sm:block">
            <User className="size-5" />
          </Link>
          <Button asChild size="sm" className="hidden md:inline-flex gradient-primary border-0 hover-glow">
            <Link to="/become-vendor">Sell</Link>
          </Button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open &&
      <div className="lg:hidden glass border-t border-border animate-fade-in">
          <div className="container py-4 space-y-2">
            <form onSubmit={submitSearch} className="flex items-center bg-surface/60 border border-border rounded-full px-3 h-10 mb-3">
              <Search className="size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="bg-transparent outline-none text-sm px-2 flex-1" />
            </form>
            {links.map((l) =>
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-surface text-sm font-medium">{l.label}</Link>
          )}
            <div className="pt-2 mt-2 border-t border-border">
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Categories</div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {categories.map((c) => {
                const Icon = iconMap[c.icon] || Package;
                return (
                  <Link key={c.id} to={`/shop?category=${c.id}`} onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-surface text-sm">
                      <Icon className="size-4 text-primary" /> {c.name}
                    </Link>);

              })}
              </div>
            </div>
            <Link to="/become-vendor" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold text-center">Become a Vendor</Link>
          </div>
        </div>
      }
    </header>);

};

export default Navbar;