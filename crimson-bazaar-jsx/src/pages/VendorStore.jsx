import { Link, useParams } from "react-router-dom";
import { Star, Package, MapPin } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const VendorStore = () => {
  const { slug } = useParams();
  const { getVendor, getVendorProducts } = useCatalog();
  const vendor = slug ? getVendor(slug) : undefined;
  if (!vendor) return (
    <div className="container py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Vendor not found</h1>
      <Button asChild className="mt-6 gradient-primary border-0"><Link to="/vendors">All vendors</Link></Button>
    </div>);

  const items = getVendorProducts(vendor.id);

  return (
    <div>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={vendor.banner} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="container -mt-20 relative">
        <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-elegant">
          <img src={vendor.logo} alt={vendor.name} className="size-24 rounded-2xl object-cover ring-4 ring-background" />
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold">{vendor.name}</h1>
            <p className="text-muted-foreground">{vendor.tagline}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm">
              <span className="inline-flex items-center gap-1"><Star className="size-4 fill-primary text-primary" /><span className="font-semibold">{vendor.rating}</span> rating</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground"><Package className="size-4" /> {items.length} products</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="size-4" /> Worldwide shipping</span>
            </div>
          </div>
          <Button className="gradient-primary border-0 hover-glow">Follow Store</Button>
        </div>

        <section className="py-12">
          <h2 className="font-display text-2xl font-bold mb-6">Products from {vendor.name}</h2>
          {items.length === 0 ?
          <div className="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground">No products yet — check back soon.</div> :

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          }
        </section>
      </div>
    </div>);

};

export default VendorStore;