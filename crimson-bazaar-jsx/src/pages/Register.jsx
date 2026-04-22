import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLaravelCsrfToken } from "@/hooks/useLaravelCsrfToken";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", pw: "", pwConfirm: "" });
  const { token, loading, error } = useLaravelCsrfToken("/register");
  const submit = (e) => {
    if (!form.email.includes("@") || form.pw.length < 6 || form.name.length < 2 || form.pw !== form.pwConfirm) {
      e.preventDefault();
      return toast.error("Please fill all fields correctly and confirm your password.");
    }

    if (!token) {
      e.preventDefault();
      toast.error(error || "Loading registration form, please try again in a moment.");
      return;
    }
  };
  return (
    <div className="container py-16 max-w-md">
      <div className="text-center mb-8 animate-fade-in-up">
        <div className="size-14 mx-auto rounded-2xl gradient-primary grid place-items-center shadow-glow animate-glow-pulse"><Store className="size-7 text-primary-foreground" /></div>
        <h1 className="font-display text-3xl font-bold mt-4">Create your account</h1>
        <p className="text-muted-foreground mt-1">Join Crimson Bazaar in seconds.</p>
      </div>
      <form action="/register" method="POST" onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-card">
        <input type="hidden" name="_token" value={token} />
        <div><label className="text-sm font-medium block mb-1.5">Full name</label><input required name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
        <div><label className="text-sm font-medium block mb-1.5">Email</label><input required name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
        <div><label className="text-sm font-medium block mb-1.5">Password</label><input required name="password" type="password" value={form.pw} onChange={(e) => setForm({ ...form, pw: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
        <div><label className="text-sm font-medium block mb-1.5">Confirm password</label><input required type="password" name="password_confirmation" value={form.pwConfirm} onChange={(e) => setForm({ ...form, pwConfirm: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
        <Button type="submit" size="lg" className="w-full gradient-primary border-0 hover-glow h-12" disabled={loading || !token}>Create account</Button>
        <p className="text-sm text-center text-muted-foreground">Already have one? <Link to="/login" className="text-primary hover:underline font-semibold">Log in</Link></p>
      </form>
    </div>);

};

export default Register;