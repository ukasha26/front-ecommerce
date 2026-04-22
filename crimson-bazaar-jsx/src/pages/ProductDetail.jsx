import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, Minus, Plus, ShoppingCart, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getProduct, getVendor, products } = useCatalog();
  const product = slug ? getProduct(slug) : undefined;
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addToCart, toggleWishlist, inWishlist } = useStore();

  if (!product) return (
    <div className="container py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Product not found</h1>
      <Button asChild className="mt-6 gradient-primary border-0"><Link to="/shop">Back to shop</Link></Button>
    </div>);


  const vendor = getVendor(product.vendorId);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wished = inWishlist(product.id);

  return (
    <div className="container py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Shop</Link> / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border">
            <img src={product.images[activeImg]} alt={product.name} className="size-full object-cover animate-scale-in" key={activeImg} />
          </div>
          {product.images.length > 1 &&
          <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) =>
            <button key={i} onClick={() => setActiveImg(i)} className={`aspect-square rounded-lg overflow-hidden border-2 transition-smooth ${activeImg === i ? "border-primary shadow-glow" : "border-border hover:border-muted-foreground"}`}>
                  <img src={img} alt="" className="size-full object-cover" />
                </button>
            )}
            </div>
          }
        </div>

        <div className="space-y-5">
          {vendor &&
          <Link to={`/vendor/${vendor.slug}`} className="inline-flex items-center gap-3 bg-card border border-border rounded-full pl-1 pr-4 py-1 hover:border-primary transition-smooth">
              <img src={vendor.logo} className="size-8 rounded-full object-cover" alt={vendor.name} />
              <span className="text-sm font-medium">{vendor.name}</span>
              <Star className="size-3.5 fill-primary text-primary" />
              <span className="text-xs text-muted-foreground">{vendor.rating}</span>
            </Link>
          }
          <h1 className="font-display text-4xl font-bold leading-tight">{product.name}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) =>
              <Star key={i} className={`size-4 ${i < Math.round(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              )}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="font-display text-4xl font-bold text-gradient">${product.price}</span>
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">${product.oldPrice}</span>}
            {product.oldPrice && <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold">Save ${product.oldPrice - product.price}</span>}
          </div>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="text-sm">
            <span className={`inline-flex items-center gap-1.5 ${product.stock > 10 ? "text-green-400" : "text-primary"}`}>
              <span className="size-2 rounded-full bg-current animate-pulse" />
              {product.stock > 10 ? "In stock" : `Only ${product.stock} left`}
            </span>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center bg-card border border-border rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-11 grid place-items-center hover:text-primary transition-smooth"><Minus className="size-4" /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="size-11 grid place-items-center hover:text-primary transition-smooth"><Plus className="size-4" /></button>
            </div>
            <Button size="lg" className="flex-1 gradient-primary border-0 hover-glow h-12" onClick={() => {addToCart(product, qty);toast.success(`${qty} × ${product.name} added`);}}>
              <ShoppingCart className="size-4" /> Add to Cart
            </Button>
            <button onClick={() => {toggleWishlist(product.id);toast.success(wished ? "Removed" : "Saved");}} className={`size-12 rounded-full grid place-items-center border transition-smooth ${wished ? "gradient-primary text-primary-foreground border-transparent shadow-glow" : "bg-card border-border hover:border-primary"}`}>
              <Heart className={`size-5 ${wished ? "fill-current" : ""}`} />
            </button>
          </div>

          <Button size="lg" variant="outline" className="w-full h-12" onClick={() => {addToCart(product, qty);navigate("/checkout");}}>
            Buy Now
          </Button>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {[{ Icon: Truck, t: "Free shipping" }, { Icon: ShieldCheck, t: "2-yr warranty" }, { Icon: RotateCcw, t: "30-day returns" }].map((b) =>
            <div key={b.t} className="bg-card border border-border rounded-xl p-3 text-center">
                <b.Icon className="size-5 mx-auto text-primary" />
                <div className="text-xs mt-1.5 text-muted-foreground">{b.t}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
          { n: "Sarah M.", r: 5, t: "Absolutely worth every penny. Quality is unmatched." },
          { n: "James K.", r: 4, t: "Great product, fast shipping. Would buy again." },
          { n: "Aisha R.", r: 5, t: "Exceeded my expectations. Highly recommend!" }].
          map((r, i) =>
          <div key={i} className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className={`size-4 ${j < r.r ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}
              </div>
              <p className="text-sm text-muted-foreground">{r.t}</p>
              <p className="text-xs font-semibold mt-3">— {r.n}</p>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 &&
      <section className="mt-20">
          <h2 className="font-display text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      }
    </div>);

};

export default ProductDetail;