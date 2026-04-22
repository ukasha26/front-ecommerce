import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, DollarSign, Users, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useLaravelCsrfToken } from "@/hooks/useLaravelCsrfToken";

const BecomeVendor = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    shop_name: "",
    description: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
  });
  const { token, loading, error } = useLaravelCsrfToken("/vendor/register");
  const submit = (e) => {
    if (!form.name || !form.email || !form.password || !form.passwordConfirmation || !form.shop_name) {
      e.preventDefault();
      toast.error("Fill the required seller fields first.");
      return;
    }

    if (form.password !== form.passwordConfirmation) {
      e.preventDefault();
      toast.error("Passwords do not match.");
      return;
    }

    if (!token) {
      e.preventDefault();
      toast.error(error || "Loading vendor form, please try again in a moment.");
      return;
    }
  };
  return (
    <div>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,hsl(var(--primary)/0.35),transparent_50%)]" />
        <div className="container relative text-center max-w-2xl">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/30 text-primary">For Sellers</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 leading-tight">Sell on <span className="text-gradient">Crimson Bazaar</span></h1>
          <p className="text-lg text-muted-foreground mt-4">Reach 120K+ buyers, keep 90% of your earnings, and start selling immediately after signup.</p>
        </div>
      </section>

      <section className="container py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[{ Icon: Rocket, t: "Quick setup", d: "Launch your store in under 10 minutes." }, { Icon: DollarSign, t: "Low fees", d: "Just 10% commission, no monthly fees." }, { Icon: Users, t: "Built-in audience", d: "Tap into our growing buyer base." }, { Icon: ShieldCheck, t: "Trusted platform", d: "Secure payouts, vendor protection." }].map((b) =>
        <div key={b.t} className="bg-card border border-border rounded-2xl p-5 hover-lift">
            <div className="size-11 rounded-xl gradient-primary grid place-items-center shadow-glow"><b.Icon className="size-5 text-primary-foreground" /></div>
            <h4 className="font-display font-bold mt-3">{b.t}</h4>
            <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
          </div>
        )}
      </section>

      <section className="container py-12 max-w-2xl">
        <form action="/vendor/register" method="POST" onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 space-y-4 shadow-elegant">
          <input type="hidden" name="_token" value={token} />
          <h2 className="font-display text-2xl font-bold">Apply to become a vendor</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium block mb-1.5">Full name</label><input required name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
            <div><label className="text-sm font-medium block mb-1.5">Business email</label><input required type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium block mb-1.5">Password</label><input required type="password" name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
            <div><label className="text-sm font-medium block mb-1.5">Confirm password</label><input required type="password" name="password_confirmation" value={form.passwordConfirmation} onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          </div>
          <div><label className="text-sm font-medium block mb-1.5">Shop name</label><input required name="shop_name" value={form.shop_name} onChange={(e) => setForm({ ...form, shop_name: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          <div><label className="text-sm font-medium block mb-1.5">Tell us about your store</label><textarea required name="description" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 py-3 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth resize-none" /></div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium block mb-1.5">Phone number</label><input required name="phone_number" value={form.phone_number} onChange={(e) => setForm({ ...form, phone_number: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
            <div><label className="text-sm font-medium block mb-1.5">Postal code</label><input required name="postal_code" value={form.postal_code} onChange={(e) => setForm({ ...form, postal_code: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          </div>
          <div><label className="text-sm font-medium block mb-1.5">Address</label><textarea required name="address" rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 py-3 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth resize-none" /></div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium block mb-1.5">City</label><input required name="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
            <div><label className="text-sm font-medium block mb-1.5">State</label><input required name="state" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input required id="terms" name="terms" type="checkbox" className="mt-1" />
            <label htmlFor="terms" className="text-muted-foreground">I agree to the Terms and Conditions and Privacy Policy.</label>
          </div>
          <Button type="submit" size="lg" className="w-full gradient-primary border-0 hover-glow h-12" disabled={loading || !token}>Submit application</Button>
          <p className="text-xs text-muted-foreground text-center">Already a vendor? <a href="/login" className="text-primary hover:underline">Sign in</a></p>
        </form>
      </section>
    </div>);

};

export default BecomeVendor;