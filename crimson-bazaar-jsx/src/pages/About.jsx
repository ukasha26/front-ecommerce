import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const About = () =>
<div>
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.3),transparent_50%)]" />
      <div className="container relative text-center max-w-3xl">
        <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">Built for <span className="text-gradient">independent</span> brands</h1>
        <p className="text-lg text-muted-foreground mt-5">Crimson Bazaar is a multi-vendor marketplace empowering independent stores to reach buyers worldwide — beautifully, fairly, and at scale.</p>
      </div>
    </section>

    <section className="container py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[{ Icon: Users, n: "120K+", l: "Happy buyers" }, { Icon: Globe, n: "65+", l: "Countries" }, { Icon: Award, n: "500+", l: "Verified vendors" }, { Icon: TrendingUp, n: "$8M+", l: "Vendor earnings" }].map((s) =>
    <div key={s.l} className="bg-card border border-border rounded-2xl p-6 text-center hover-lift">
          <div className="size-12 mx-auto rounded-xl gradient-primary grid place-items-center shadow-glow"><s.Icon className="size-5 text-primary-foreground" /></div>
          <div className="font-display text-3xl font-bold text-gradient mt-3">{s.n}</div>
          <div className="text-sm text-muted-foreground">{s.l}</div>
        </div>
    )}
    </section>

    <section className="container py-16 grid lg:grid-cols-2 gap-12 items-center">
      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" alt="" className="rounded-3xl shadow-elegant" />
      <div>
        <h2 className="font-display text-4xl font-bold">Our story</h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">We started Crimson Bazaar because the best products often come from the smallest stores — and they deserved a stage as bold as their craft. Today, we host hundreds of independent brands across electronics, fashion, beauty, and more.</p>
        <p className="text-muted-foreground mt-3 leading-relaxed">Our mission: a marketplace that's fair to vendors and unforgettable to buyers.</p>
        <Button asChild size="lg" className="mt-6 gradient-primary border-0 hover-glow"><Link to="/become-vendor">Become a Vendor</Link></Button>
      </div>
    </section>
  </div>;


export default About;