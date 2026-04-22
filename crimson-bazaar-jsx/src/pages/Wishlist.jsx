import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  const { products } = useCatalog();
  const { wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.id));
  return (
    <div className="container py-10">
      <h1 className="font-display text-4xl font-bold mb-8">My Wishlist</h1>
      {items.length === 0 ?
      <div className="text-center py-16">
          <Heart className="size-16 mx-auto text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">Your wishlist is empty.</p>
          <Button asChild className="mt-6 gradient-primary border-0"><Link to="/shop">Discover products</Link></Button>
        </div> :

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      }
    </div>);

};

export default Wishlist;