import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCatalog } from "@/context/CatalogContext";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";

const Shop = () => {
  const { products, categories, vendors } = useCatalog();
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") || "";
  const initialQ = params.get("q") || "";
  const [category, setCategory] = useState(initialCat);
  const [vendorId, setVendorId] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("featured");
  const [q, setQ] = useState(initialQ);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {setCategory(params.get("category") || "");setQ(params.get("q") || "");}, [params]);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
    (!category || p.category === category) && (
    !vendorId || p.vendorId === vendorId) &&
    p.price <= maxPrice &&
    p.rating >= minRating && (
    !q || p.name.toLowerCase().includes(q.toLowerCase()))
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, vendorId, maxPrice, minRating, q, sort]);

  const reset = () => {setCategory("");setVendorId("");setMaxPrice(2000);setMinRating(0);setQ("");setParams({});};

  const FiltersPanel =
  <div className="space-y-6">
      <div>
        <h4 className="font-display font-semibold mb-3">Search</h4>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." className="w-full bg-background border border-border rounded-md px-3 h-10 text-sm outline-none focus:border-primary transition-smooth" />
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Categories</h4>
        <div className="space-y-1.5">
          <button onClick={() => setCategory("")} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-smooth ${!category ? "gradient-primary text-primary-foreground" : "hover:bg-surface"}`}>All</button>
          {categories.map((c) =>
        <button key={c.id} onClick={() => setCategory(c.id)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-smooth ${category === c.id ? "gradient-primary text-primary-foreground" : "hover:bg-surface"}`}>{c.name}</button>
        )}
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Vendor</h4>
        <select value={vendorId} onChange={(e) => setVendorId(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 h-10 text-sm outline-none focus:border-primary">
          <option value="">All vendors</option>
          {vendors.map((v) => <option key={v.id} value={v.id}>{v.name}</option>)}
        </select>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Max Price: <span className="text-primary">${maxPrice}</span></h4>
        <input type="range" min={20} max={2000} step={10} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-full accent-primary" />
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Min Rating</h4>
        <div className="flex gap-2">
          {[0, 4, 4.5, 4.7].map((r) =>
        <button key={r} onClick={() => setMinRating(r)} className={`flex-1 py-2 rounded-lg text-xs font-medium transition-smooth ${minRating === r ? "gradient-primary text-primary-foreground" : "bg-surface hover:bg-card"}`}>{r === 0 ? "All" : `${r}+`}</button>
        )}
        </div>
      </div>
      <button onClick={reset} className="w-full py-2.5 rounded-lg border border-border text-sm hover:bg-surface transition-smooth">Reset Filters</button>
    </div>;


  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold">Shop All</h1>
        <p className="text-muted-foreground mt-2">{filtered.length} products available</p>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="hidden lg:block sticky top-24 self-start bg-card border border-border rounded-2xl p-6">
          {FiltersPanel}
        </aside>

        <div>
          <div className="flex items-center justify-between mb-6 gap-3">
            <button onClick={() => setShowFilters(true)} className="lg:hidden inline-flex items-center gap-2 px-4 h-10 rounded-lg bg-card border border-border text-sm">
              <SlidersHorizontal className="size-4" /> Filters
            </button>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="ml-auto bg-card border border-border rounded-lg px-3 h-10 text-sm outline-none focus:border-primary">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {filtered.length === 0 ?
          <div className="bg-card border border-border rounded-2xl p-16 text-center">
              <p className="text-muted-foreground">No products match your filters.</p>
              <button onClick={reset} className="mt-4 px-5 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold">Clear filters</button>
            </div> :

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((p, i) =>
            <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 30}ms` }}>
                  <ProductCard product={p} />
                </div>
            )}
            </div>
          }
        </div>
      </div>

      {showFilters &&
      <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setShowFilters(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-card border-l border-border p-6 overflow-y-auto animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg">Filters</h3>
              <button onClick={() => setShowFilters(false)}><X className="size-5" /></button>
            </div>
            {FiltersPanel}
          </div>
        </div>
      }
    </div>);

};

export default Shop;