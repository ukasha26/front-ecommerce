import { Link } from "react-router-dom";
import { Star, Package } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";

const Vendors = () => {
  const { vendors, products } = useCatalog();

  return <div className="container py-10">
    <div className="mb-10">
      <h1 className="font-display text-4xl font-bold">Our Vendors</h1>
      <p className="text-muted-foreground mt-2">{vendors.length} verified independent stores</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vendors.map((v, i) => {
      const count = products.filter((p) => p.vendorId === v.id).length;
      return (
        <Link key={v.id} to={`/vendor/${v.slug}`} className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="h-32 relative overflow-hidden">
              <img src={v.banner} alt="" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-5 -mt-10 relative">
              <img src={v.logo} alt={v.name} className="size-16 rounded-2xl object-cover ring-4 ring-card shadow-card" />
              <h3 className="font-display font-bold text-xl mt-3">{v.name}</h3>
              <p className="text-sm text-muted-foreground">{v.tagline}</p>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span className="inline-flex items-center gap-1"><Star className="size-4 fill-primary text-primary" /><span className="font-semibold">{v.rating}</span></span>
                <span className="inline-flex items-center gap-1 text-muted-foreground"><Package className="size-4" /> {count} products</span>
              </div>
            </div>
          </Link>);

    })}
    </div>
  </div>;
};


export default Vendors;