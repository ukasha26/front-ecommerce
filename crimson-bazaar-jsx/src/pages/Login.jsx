import { useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLaravelCsrfToken } from "@/hooks/useLaravelCsrfToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const { token, loading, error } = useLaravelCsrfToken("/login");
  const submit = (e) => {
    if (!email.includes("@") || pw.length < 6) return toast.error("Enter a valid email and 6+ char password");
    if (!token) {
      e.preventDefault();
      toast.error(error || "Loading login form, please try again in a moment.");
      return;
    }
  };
  return (
    <div className="container py-16 max-w-md">
      <div className="text-center mb-8 animate-fade-in-up">
        <div className="size-14 mx-auto rounded-2xl gradient-primary grid place-items-center shadow-glow animate-glow-pulse"><Store className="size-7 text-primary-foreground" /></div>
        <h1 className="font-display text-3xl font-bold mt-4">Welcome back</h1>
        <p className="text-muted-foreground mt-1">Log in to continue shopping.</p>
      </div>
      <form action="/login" method="POST" onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-card">
        <input type="hidden" name="_token" value={token} />
        <div><label className="text-sm font-medium block mb-1.5">Email</label><input required name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
        <div><label className="text-sm font-medium block mb-1.5">Password</label><input required name="password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
        <Button type="submit" size="lg" className="w-full gradient-primary border-0 hover-glow h-12" disabled={loading || !token}>Log in</Button>
        <p className="text-sm text-center text-muted-foreground">No account? <Link to="/register" className="text-primary hover:underline font-semibold">Register</Link></p>
      </form>
    </div>);

};

export default Login;