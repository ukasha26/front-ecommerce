import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const [params] = useSearchParams();
  const id = params.get("id") || "CB-XXXXXXXX";
  return (
    <div className="container py-20 max-w-xl mx-auto text-center animate-fade-in-up">
      <div className="size-24 mx-auto rounded-full gradient-primary grid place-items-center shadow-glow animate-glow-pulse">
        <CheckCircle2 className="size-12 text-primary-foreground" />
      </div>
      <h1 className="font-display text-4xl font-bold mt-6">Order Confirmed!</h1>
      <p className="text-muted-foreground mt-3">Thank you for your purchase. We've sent a confirmation to your email.</p>
      <div className="bg-card border border-border rounded-2xl p-6 mt-8 inline-flex items-center gap-3">
        <Package className="size-5 text-primary" />
        <span className="text-sm">Order ID: <span className="font-mono font-bold text-gradient">{id}</span></span>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        <Button asChild size="lg" className="gradient-primary border-0 hover-glow"><Link to="/shop">Continue Shopping</Link></Button>
        <Button asChild size="lg" variant="outline"><Link to="/">Back Home</Link></Button>
      </div>
    </div>);

};

export default OrderSuccess;