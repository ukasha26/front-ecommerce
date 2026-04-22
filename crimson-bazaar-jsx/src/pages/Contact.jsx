import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="container py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Get in touch</h1>
        <p className="text-muted-foreground mt-3">Questions, partnerships, or just to say hi.</p>
      </div>
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
        <div className="space-y-4">
          {[
          { Icon: Mail, l: "Email", v: "hello@crimsonbazaar.com" },
          { Icon: Phone, l: "Phone", v: "+1 (555) 010-2024" },
          { Icon: MapPin, l: "Office", v: "350 Market St, San Francisco" }].
          map((c) =>
          <div key={c.l} className="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start hover-lift">
              <div className="size-11 rounded-xl gradient-primary grid place-items-center shadow-glow"><c.Icon className="size-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">{c.l}</div>
                <div className="font-semibold">{c.v}</div>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <div><label className="text-sm font-medium block mb-1.5">Your name</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          <div><label className="text-sm font-medium block mb-1.5">Email</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 h-11 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth" /></div>
          <div><label className="text-sm font-medium block mb-1.5">Message</label><textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 py-3 text-sm outline-none focus:border-primary focus:shadow-glow transition-smooth resize-none" /></div>
          <Button type="submit" size="lg" className="w-full gradient-primary border-0 hover-glow h-12">Send message</Button>
        </form>
      </div>
    </div>);

};

export default Contact;