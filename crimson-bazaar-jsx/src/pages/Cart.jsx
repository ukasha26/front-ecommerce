import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { getVendor } = useCatalog();
  const { cart, updateQty, removeFromCart, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="size-16 mx-auto text-muted-foreground" />
        <h1 className="font-display text-3xl font-bold mt-4">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2">Discover something you'll love.</p>
        <Button asChild size="lg" className="mt-6 gradient-primary border-0 hover-glow">
          <Link to="/shop">Start Shopping <ArrowRight className="size-4" /></Link>
        </Button>
      </div>);

  }

  // group by vendor
  const groups = cart.reduce((acc, item) => {
    (acc[item.product.vendorId] ||= []).push(item);
    return acc;
  }, {});

  const shipping = cartTotal > 75 ? 0 : 9.99;
  const tax = +(cartTotal * 0.08).toFixed(2);
  const total = +(cartTotal + shipping + tax).toFixed(2);

  return (
    <div className="container py-10">
      <h1 className="font-display text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-6">
          {Object.entries(groups).map(([vendorId, items]) => {
            const vendor = getVendor(vendorId);
            return (
              <div key={vendorId} className="bg-card border border-border rounded-2xl overflow-hidden">
                {vendor &&
                <div className="px-5 py-3 border-b border-border bg-surface/50 flex items-center gap-3">
                    <img src={vendor.logo} className="size-8 rounded-full object-cover" alt="" />
                    <Link to={`/vendor/${vendor.slug}`} className="font-semibold text-sm hover:text-primary">{vendor.name}</Link>
                  </div>
                }
                <div className="divide-y divide-border">
                  {items.map((item) =>
                  <div key={item.product.id} className="p-5 flex gap-4 items-center">
                      <Link to={`/product/${item.product.slug}`} className="size-20 rounded-xl overflow-hidden bg-surface shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="size-full object-cover" />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link to={`/product/${item.product.slug}`} className="font-display font-semibold hover:text-primary line-clamp-1">{item.product.name}</Link>
                        <div className="font-display font-bold text-gradient mt-1">${item.product.price}</div>
                      </div>
                      <div className="flex items-center bg-background border border-border rounded-full">
                        <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="size-9 grid place-items-center hover:text-primary"><Minus className="size-3.5" /></button>
                        <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                        <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="size-9 grid place-items-center hover:text-primary"><Plus className="size-3.5" /></button>
                      </div>
                      <div className="text-right hidden sm:block">
                        <div className="font-bold">${(item.product.price * item.qty).toFixed(2)}</div>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="size-9 rounded-full grid place-items-center text-muted-foreground hover:text-primary hover:bg-surface transition-smooth">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>);

          })}
        </div>

        <aside className="bg-card border border-border rounded-2xl p-6 h-fit sticky top-24">
          <h3 className="font-display font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="font-semibold">{shipping === 0 ? "FREE" : `$${shipping}`}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax (8%)</span><span className="font-semibold">${tax}</span></div>
          </div>
          <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
            <span className="font-display font-bold">Total</span>
            <span className="font-display text-2xl font-bold text-gradient">${total}</span>
          </div>
          <Button asChild size="lg" className="w-full mt-5 gradient-primary border-0 hover-glow h-12">
            <Link to="/checkout">Checkout <ArrowRight className="size-4" /></Link>
          </Button>
          <Link to="/shop" className="block text-center text-sm text-muted-foreground hover:text-primary mt-3">Continue shopping</Link>
        </aside>
      </div>
    </div>);

};

export default Cart;