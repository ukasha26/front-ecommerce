import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCatalog } from "@/context/CatalogContext";
import { useStore } from "@/context/StoreContext";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const { getVendor } = useCatalog();
  const vendor = getVendor(product.vendorId);
  const wished = inWishlist(product.id);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover-lift">
      <Link to={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-surface">
        <img src={product.image} alt={product.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
        {product.oldPrice &&
        <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-bold gradient-primary text-primary-foreground">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        }
        <button
          onClick={(e) => {e.preventDefault();toggleWishlist(product.id);toast.success(wished ? "Removed from wishlist" : "Added to wishlist");}}
          className={`absolute top-3 right-3 size-9 rounded-full grid place-items-center backdrop-blur-md transition-smooth ${wished ? "gradient-primary text-primary-foreground shadow-glow" : "bg-background/60 text-foreground hover:bg-background"}`}
          aria-label="wishlist">
          
          <Heart className={`size-4 ${wished ? "fill-current" : ""}`} />
        </button>
      </Link>
      <div className="p-4">
        {vendor && <Link to={`/vendor/${vendor.slug}`} className="text-xs text-muted-foreground hover:text-primary transition-smooth">{vendor.name}</Link>}
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display font-semibold mt-1 line-clamp-1 hover:text-primary transition-smooth">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>
        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="font-display text-lg font-bold">${product.price}</span>
            {product.oldPrice && <span className="ml-2 text-xs text-muted-foreground line-through">${product.oldPrice}</span>}
          </div>
          <button
            onClick={() => {addToCart(product);toast.success("Added to cart");}}
            className="size-9 rounded-full gradient-primary text-primary-foreground grid place-items-center hover-glow transition-smooth"
            aria-label="add to cart">
            
            <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </div>);

};

export default ProductCard;