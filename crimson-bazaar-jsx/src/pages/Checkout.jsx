import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Banknote, Lock } from "lucide-react";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", country: "" });

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Your cart is empty</h1>
        <Button asChild className="mt-6 gradient-primary border-0"><Link to="/shop">Shop now</Link></Button>
      </div>);

  }

  const shipping = cartTotal > 75 ? 0 : 9.99;
  const tax = +(cartTotal * 0.08).toFixed(2);
  const total = +(cartTotal + shipping + tax).toFixed(2);

  const submit = (e) => {
    e.preventDefault();
    const orderId = "CB-" + Math.random().toString(36).slice(2, 10).toUpperCase();
    clearCart();
    navigate(`/order-success?id=${orderId}`);
  };

  return (
    <div className="container py-10">
      <h1 className="font-display text-4xl font-bold mb-8">Checkout</h1>
      <form onSubmit={submit} className="grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg mb-5">Shipping Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
              { k: "name", l: "Full name", c: "sm:col-span-2" },
              { k: "email", l: "Email", t: "email", c: "sm:col-span-2" },
              { k: "address", l: "Address", c: "sm:col-span-2" },
              { k: "city", l: "City" },
              { k: "zip", l: "ZIP code" },
              { k: "country", l: "Country", c: "sm:col-span-2" }].
              map((f) =>
              <div key={f.k} className={f.c}>
                  <label className="text-sm font-medium block mb-1.5">{f.l}</label>
                  <input
                  required
                  type={f.t || "text"}
                  value={form[f.k]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" />
                
                </div>
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg mb-5">Payment Method</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
              { id: "card", l: "Credit Card", Icon: CreditCard },
              { id: "wallet", l: "Wallet", Icon: Wallet },
              { id: "cod", l: "Cash on Delivery", Icon: Banknote }].
              map((p) =>
              <button key={p.id} type="button" onClick={() => setPayment(p.id)} className={`p-4 rounded-xl border-2 transition-smooth flex flex-col items-center gap-2 ${payment === p.id ? "border-primary gradient-card shadow-glow" : "border-border bg-surface hover:border-muted-foreground"}`}>
                  <p.Icon className="size-5" />
                  <span className="text-sm font-medium">{p.l}</span>
                </button>
              )}
            </div>
            {payment === "card" &&
            <div className="mt-5 grid sm:grid-cols-2 gap-4 animate-fade-in">
                <div className="sm:col-span-2"><label className="text-sm font-medium block mb-1.5">Card number</label><input placeholder="1234 5678 9012 3456" className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary transition-smooth" /></div>
                <div><label className="text-sm font-medium block mb-1.5">Expiry</label><input placeholder="MM/YY" className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary transition-smooth" /></div>
                <div><label className="text-sm font-medium block mb-1.5">CVC</label><input placeholder="123" className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary transition-smooth" /></div>
              </div>
            }
          </div>
        </div>

        <aside className="bg-card border border-border rounded-2xl p-6 h-fit sticky top-24">
          <h3 className="font-display font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {cart.map((item) =>
            <div key={item.product.id} className="flex gap-3 items-center">
                <img src={item.product.image} alt="" className="size-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold line-clamp-1">{item.product.name}</div>
                  <div className="text-xs text-muted-foreground">Qty {item.qty}</div>
                </div>
                <div className="text-sm font-bold">${(item.product.price * item.qty).toFixed(2)}</div>
              </div>
            )}
          </div>
          <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : `$${shipping}`}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax}</span></div>
          </div>
          <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
            <span className="font-display font-bold">Total</span>
            <span className="font-display text-2xl font-bold text-gradient">${total}</span>
          </div>
          <Button type="submit" size="lg" className="w-full mt-5 gradient-primary border-0 hover-glow h-12">
            <Lock className="size-4" /> Place Order
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">Secure SSL encrypted checkout</p>
        </aside>
      </form>
    </div>);

};

export default Checkout;