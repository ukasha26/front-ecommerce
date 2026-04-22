const DEFAULT_STORE_NAME = "Crimson Bazaar";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

const getApiBase = () => {
  const configured = import.meta.env.VITE_API_BASE_URL;
  if (!configured) {
    return "";
  }

  return trimTrailingSlash(configured);
};

const toUrl = (path) => {
  const base = getApiBase();
  return `${base}${path}`;
};

const apiRequest = async (path) => {
  const response = await fetch(toUrl(path), {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `API request failed (${response.status})`);
  }

  return response.json();
};

export const fetchStoreBootstrap = async () => {
  const payload = await apiRequest("/api/store/bootstrap");

  return {
    meta: payload?.meta || { storeName: DEFAULT_STORE_NAME },
    categories: Array.isArray(payload?.categories) ? payload.categories : [],
    vendors: Array.isArray(payload?.vendors) ? payload.vendors : [],
    products: Array.isArray(payload?.products) ? payload.products : [],
  };
};
