import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { categories as fallbackCategories, products as fallbackProducts, vendors as fallbackVendors } from "@/data/mock";
import { fetchStoreBootstrap } from "@/lib/api";

const CatalogContext = createContext(null);

const fallbackMeta = {
  storeName: "Crimson Bazaar",
  tagline: "A curated multi-vendor marketplace for modern shoppers.",
};

export const CatalogProvider = ({ children }) => {
  const [meta, setMeta] = useState(fallbackMeta);
  const [categories, setCategories] = useState(fallbackCategories);
  const [vendors, setVendors] = useState(fallbackVendors);
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [error, setError] = useState(null);

  const loadCatalog = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const payload = await fetchStoreBootstrap();

      if (!payload.products.length || !payload.vendors.length || !payload.categories.length) {
        throw new Error("Catalog data is empty.");
      }

      setMeta(payload.meta || fallbackMeta);
      setCategories(payload.categories);
      setVendors(payload.vendors);
      setProducts(payload.products);
      setUsingFallback(false);
    } catch (err) {
      setMeta(fallbackMeta);
      setCategories(fallbackCategories);
      setVendors(fallbackVendors);
      setProducts(fallbackProducts);
      setUsingFallback(true);
      setError(err instanceof Error ? err.message : "Could not load catalog.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCatalog();
  }, [loadCatalog]);

  const getProduct = useCallback((slug) => products.find((p) => p.slug === slug), [products]);
  const getVendor = useCallback((idOrSlug) => vendors.find((v) => v.id === idOrSlug || v.slug === idOrSlug), [vendors]);
  const getVendorProducts = useCallback((vendorId) => products.filter((p) => p.vendorId === vendorId), [products]);

  const value = useMemo(() => ({
    meta,
    categories,
    vendors,
    products,
    loading,
    usingFallback,
    error,
    refreshCatalog: loadCatalog,
    getProduct,
    getVendor,
    getVendorProducts,
  }), [
    meta,
    categories,
    vendors,
    products,
    loading,
    usingFallback,
    error,
    loadCatalog,
    getProduct,
    getVendor,
    getVendorProducts,
  ]);

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
};

export const useCatalog = () => {
  const ctx = useContext(CatalogContext);
  if (!ctx) {
    throw new Error("useCatalog must be used within CatalogProvider");
  }

  return ctx;
};
