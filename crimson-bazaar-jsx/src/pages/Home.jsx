import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Shirt, Home as HomeIcon, Sparkles, Dumbbell, BookOpen, Star, Truck, ShieldCheck, Headphones, Gamepad2, UtensilsCrossed, ToyBrick, Car, Watch, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCatalog } from "@/context/CatalogContext";
import ProductCard from "@/components/ProductCard";

const iconMap = { Cpu, Shirt, Home: HomeIcon, Sparkles, Dumbbell, BookOpen, Gamepad2, UtensilsCrossed, ToyBrick, Car, Headphones, Watch };

const Home = () => {
  const { products, vendors, categories } = useCatalog();
  const trending = products.filter((p) => p.trending).slice(0, 8);
  const featured = products.slice(0, 8);

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.3),transparent_50%)]" />
        <div className="container relative py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/30 text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              New Season Collection 2026
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Discover the <span className="text-gradient">Crimson</span><br />
              of Modern Commerce
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              A curated multi-vendor marketplace where independent brands meet bold buyers. Shop premium products from {vendors.length}+ verified vendors.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary border-0 hover-glow text-base h-12 px-7">
                <Link to="/shop">Shop Now <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-12 px-7 border-border hover:bg-surface">
                <Link to="/vendors">Explore Vendors</Link>
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              {[{ n: "8K+", l: "Products" }, { n: "500+", l: "Vendors" }, { n: "120K+", l: "Happy Buyers" }].map((s) =>
              <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-gradient">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              )}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 gradient-primary rounded-[2rem] opacity-30 blur-3xl animate-glow-pulse" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop" alt="" className="rounded-2xl shadow-elegant animate-float" />
                <img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop" alt="" className="rounded-2xl shadow-card" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop" alt="" className="rounded-2xl shadow-card" />
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=500&fit=crop" alt="" className="rounded-2xl shadow-elegant animate-float" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground mt-2">Find what you love, faster.</p>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center text-sm text-primary hover:underline">View all <ArrowRight className="size-4 ml-1" /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c, i) => {
            const Icon = iconMap[c.icon] || Package;
            return (
              <Link key={c.id} to={`/shop?category=${c.id}`} className="group relative rounded-2xl bg-card border border-border p-6 text-center hover-lift overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 gradient-primary transition-smooth" />
                <div className="relative">
                  <div className="size-14 mx-auto rounded-xl bg-surface border border-border grid place-items-center group-hover:bg-background/20 group-hover:border-transparent transition-smooth">
                    <Icon className="size-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <div className="font-display font-semibold mt-3 group-hover:text-primary-foreground transition-smooth">{c.name}</div>
                </div>
              </Link>);

          })}
        </div>
      </section>

      {/* TRENDING */}
      <section className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Trending Now</h2>
            <p className="text-muted-foreground mt-2">Most loved by the community this week.</p>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center text-sm text-primary hover:underline">See all <ArrowRight className="size-4 ml-1" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {trending.map((p, i) =>
          <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
              <ProductCard product={p} />
            </div>
          )}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.4),transparent_50%)]" />
          <div className="relative grid md:grid-cols-2 gap-8 p-10 md:p-14 items-center">
            <div>
              <span className="text-sm font-semibold text-primary tracking-widest">LIMITED TIME</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">Up to <span className="text-gradient">40% OFF</span><br />on featured vendors</h3>
              <p className="text-muted-foreground mt-3 max-w-md">Hand-picked deals from your favorite stores. Refreshed weekly.</p>
              <Button asChild size="lg" className="mt-6 gradient-primary border-0 hover-glow">
                <Link to="/shop">Grab the Deals <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=700&fit=crop" alt="" className="absolute inset-0 size-full object-cover rounded-2xl shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      {/* TOP VENDORS */}
      <section className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Top Vendors</h2>
            <p className="text-muted-foreground mt-2">Independent brands worth knowing.</p>
          </div>
          <Link to="/vendors" className="hidden sm:inline-flex items-center text-sm text-primary hover:underline">All vendors <ArrowRight className="size-4 ml-1" /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {vendors.slice(0, 6).map((v) =>
          <Link key={v.id} to={`/vendor/${v.slug}`} className="group rounded-2xl bg-card border border-border p-5 text-center hover-lift">
              <img src={v.logo} alt={v.name} className="size-16 mx-auto rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-smooth" />
              <div className="font-display font-semibold mt-3 line-clamp-1">{v.name}</div>
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-1">
                <Star className="size-3 fill-primary text-primary" /> {v.rating}
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Featured Picks</h2>
          <p className="text-muted-foreground mt-2">Editor-curated products you'll love.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p, i) =>
          <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
              <ProductCard product={p} />
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
          { Icon: Truck, t: "Free Shipping", d: "On orders over $75 worldwide." },
          { Icon: ShieldCheck, t: "Secure Checkout", d: "Bank-level encryption on every order." },
          { Icon: Headphones, t: "24/7 Support", d: "Real humans, ready to help." }].
          map((f) =>
          <div key={f.t} className="rounded-2xl bg-card border border-border p-6 flex gap-4 items-start hover-lift">
              <div className="size-12 rounded-xl gradient-primary grid place-items-center shrink-0 shadow-glow">
                <f.Icon className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">{f.t}</div>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container">
        <div className="rounded-3xl gradient-primary p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(0_0%_100%/0.2),transparent_60%)]" />
          <div className="relative max-w-2xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Join the Crimson Club</h3>
            <p className="text-primary-foreground/80 mt-2">Exclusive drops, vendor stories, and 10% off your first order.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 h-12 rounded-full px-5 bg-background/95 text-foreground outline-none border-0 focus:ring-2 focus:ring-background" />
              <button className="h-12 px-6 rounded-full bg-background text-foreground font-semibold hover:bg-foreground hover:text-background transition-smooth">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>);

};

export default Home;