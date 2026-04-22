import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, DollarSign, Users, Settings, LogOut, TrendingUp, Plus, Search } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import { useStore } from "@/context/StoreContext";

const navItems = [
{ id: "overview", label: "Overview", Icon: LayoutDashboard },
{ id: "products", label: "Products", Icon: Package },
{ id: "orders", label: "Orders", Icon: ShoppingBag },
{ id: "customers", label: "Customers", Icon: Users },
{ id: "settings", label: "Settings", Icon: Settings }];


const VendorDashboard = () => {
  const [active, setActive] = useState("overview");
  const { products, vendors } = useCatalog();
  const { user, logout } = useStore();
  const vendor = vendors[0] || {
    id: "v0",
    name: "Vendor",
    logo: "https://api.dicebear.com/8.x/shapes/svg?seed=vendor",
    tagline: "",
  };
  const myProducts = products.filter((p) => p.vendorId === vendor.id);

  const orders = [
  { id: "#3421", customer: "Sarah M.", product: myProducts[0]?.name, amount: 249, status: "Shipped" },
  { id: "#3420", customer: "James K.", product: myProducts[1]?.name, amount: 399, status: "Processing" },
  { id: "#3419", customer: "Aisha R.", product: myProducts[2]?.name, amount: 159, status: "Delivered" },
  { id: "#3418", customer: "Liam C.", product: myProducts[3]?.name, amount: 129, status: "Delivered" },
  { id: "#3417", customer: "Mia L.", product: myProducts[4]?.name, amount: 89, status: "Cancelled" }];


  const stats = [
  { l: "Total Sales", v: "$12,840", c: "+18%", Icon: DollarSign },
  { l: "Orders", v: "1,284", c: "+12%", Icon: ShoppingBag },
  { l: "Products", v: myProducts.length.toString(), c: "+2", Icon: Package },
  { l: "Earnings", v: "$11,556", c: "+18%", Icon: TrendingUp }];


  const statusClass = (s) =>
  s === "Delivered" ? "bg-green-500/10 text-green-400 border-green-500/30" :
  s === "Shipped" ? "bg-blue-500/10 text-blue-400 border-blue-500/30" :
  s === "Processing" ? "bg-primary/10 text-primary border-primary/30" :
  "bg-muted text-muted-foreground border-border";

  const openBackend = (path) => {
    window.location.assign(path);
  };

  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-[260px_1fr] gap-6">
        <aside className="bg-card border border-border rounded-2xl p-4 h-fit lg:sticky lg:top-24">
          <div className="flex items-center gap-3 p-3 mb-3 rounded-xl bg-surface">
            <img src={vendor.logo} className="size-10 rounded-lg object-cover" alt="" />
            <div className="min-w-0">
              <div className="font-display font-bold text-sm truncate">{user?.name || vendor.name}</div>
              <div className="text-xs text-muted-foreground truncate">Vendor</div>
            </div>
          </div>
          <nav className="space-y-1">
            {navItems.map((n) =>
            <button key={n.id} onClick={() => setActive(n.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth ${active === n.id ? "gradient-primary text-primary-foreground shadow-glow" : "hover:bg-surface text-muted-foreground hover:text-foreground"}`}>
                <n.Icon className="size-4" /> {n.label}
              </button>
            )}
            <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-surface text-muted-foreground hover:text-foreground transition-smooth mt-4 border-t border-border pt-4">
              <LogOut className="size-4" /> Logout
            </button>
          </nav>
        </aside>

        <div className="space-y-6 min-w-0">
          {active === "overview" &&
          <>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-display text-3xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground text-sm mt-1">Welcome back, {user?.name || vendor.name}!</p>
                </div>
                <button onClick={() => openBackend("/vendor/product/create")} className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover-glow"><Plus className="size-4" /> New product</button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s) =>
              <div key={s.l} className="bg-card border border-border rounded-2xl p-5 hover-lift">
                    <div className="flex items-start justify-between">
                      <div className="size-10 rounded-xl gradient-primary grid place-items-center shadow-glow"><s.Icon className="size-5 text-primary-foreground" /></div>
                      <span className="text-xs font-bold text-green-400">{s.c}</span>
                    </div>
                    <div className="font-display text-2xl font-bold mt-3">{s.v}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
              )}
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-bold mb-4">Sales — Last 7 days</h3>
                <div className="flex items-end gap-3 h-48">
                  {[40, 65, 50, 80, 95, 70, 88].map((h, i) =>
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full rounded-t-md gradient-primary hover:shadow-glow transition-smooth" style={{ height: `${h}%` }} />
                      <div className="text-xs text-muted-foreground">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</div>
                    </div>
                )}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <h3 className="font-display font-bold">Recent Orders</h3>
                  <button onClick={() => setActive("orders")} className="text-sm text-primary hover:underline">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface/50 text-muted-foreground text-xs uppercase">
                      <tr><th className="text-left px-6 py-3">Order</th><th className="text-left px-6 py-3">Customer</th><th className="text-left px-6 py-3">Product</th><th className="text-left px-6 py-3">Amount</th><th className="text-left px-6 py-3">Status</th></tr>
                    </thead>
                    <tbody>
                      {orders.map((o) =>
                    <tr key={o.id} className="border-t border-border hover:bg-surface/30 transition-smooth">
                          <td className="px-6 py-4 font-mono font-semibold">{o.id}</td>
                          <td className="px-6 py-4">{o.customer}</td>
                          <td className="px-6 py-4 max-w-[200px] truncate">{o.product}</td>
                          <td className="px-6 py-4 font-bold">${o.amount}</td>
                          <td className="px-6 py-4"><span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${statusClass(o.status)}`}>{o.status}</span></td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          }

          {active === "products" &&
          <>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h1 className="font-display text-3xl font-bold">My Products</h1>
                <div className="flex gap-2">
                  <div className="flex items-center bg-card border border-border rounded-lg px-3 h-10"><Search className="size-4 text-muted-foreground" /><input placeholder="Search…" className="bg-transparent outline-none px-2 text-sm w-40" /></div>
                  <button onClick={() => openBackend("/vendor/product/create")} className="inline-flex items-center gap-2 px-4 h-10 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover-glow"><Plus className="size-4" /> Add</button>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface/50 text-muted-foreground text-xs uppercase">
                      <tr><th className="text-left px-6 py-3">Product</th><th className="text-left px-6 py-3">Price</th><th className="text-left px-6 py-3">Stock</th><th className="text-left px-6 py-3">Rating</th><th className="text-left px-6 py-3">Status</th></tr>
                    </thead>
                    <tbody>
                      {myProducts.map((p) =>
                    <tr key={p.id} className="border-t border-border hover:bg-surface/30 transition-smooth">
                          <td className="px-6 py-3"><Link to={`/product/${p.slug}`} className="flex items-center gap-3 hover:text-primary"><img src={p.image} className="size-12 rounded-lg object-cover" alt="" /><span className="font-semibold line-clamp-1">{p.name}</span></Link></td>
                          <td className="px-6 py-3 font-bold">${p.price}</td>
                          <td className="px-6 py-3">{p.stock}</td>
                          <td className="px-6 py-3">⭐ {p.rating}</td>
                          <td className="px-6 py-3"><span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border bg-green-500/10 text-green-400 border-green-500/30">Active</span></td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          }

          {active === "orders" &&
          <>
              <h1 className="font-display text-3xl font-bold">All Orders</h1>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface/50 text-muted-foreground text-xs uppercase">
                      <tr><th className="text-left px-6 py-3">Order</th><th className="text-left px-6 py-3">Customer</th><th className="text-left px-6 py-3">Product</th><th className="text-left px-6 py-3">Amount</th><th className="text-left px-6 py-3">Status</th></tr>
                    </thead>
                    <tbody>
                      {orders.map((o) =>
                    <tr key={o.id} className="border-t border-border hover:bg-surface/30">
                          <td className="px-6 py-4 font-mono font-semibold">{o.id}</td>
                          <td className="px-6 py-4">{o.customer}</td>
                          <td className="px-6 py-4 max-w-[200px] truncate">{o.product}</td>
                          <td className="px-6 py-4 font-bold">${o.amount}</td>
                          <td className="px-6 py-4"><span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${statusClass(o.status)}`}>{o.status}</span></td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          }

          {active === "customers" &&
          <div className="bg-card border border-border rounded-2xl p-16 text-center">
              <Users className="size-12 mx-auto text-muted-foreground" />
              <h3 className="font-display text-xl font-bold mt-4">Customer insights</h3>
              <p className="text-muted-foreground text-sm mt-2">Customer analytics coming soon.</p>
            </div>
          }

          {active === "settings" &&
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-xl">
              <h1 className="font-display text-2xl font-bold">Store Settings</h1>
              <div><label className="text-sm font-medium block mb-1.5">Store name</label><input defaultValue={vendor.name} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary transition-smooth" /></div>
              <div><label className="text-sm font-medium block mb-1.5">Tagline</label><input defaultValue={vendor.tagline} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary transition-smooth" /></div>
              <button className="px-5 h-11 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover-glow">Save changes</button>
            </div>
          }
        </div>
      </div>
    </div>);

};

export default VendorDashboard;