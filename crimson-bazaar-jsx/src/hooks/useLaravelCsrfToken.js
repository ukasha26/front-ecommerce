import { useEffect, useState } from "react";

const extractToken = (html) => {
  const match = html.match(/name="_token" value="([^"]+)"/i);
  return match ? match[1] : "";
};

export const useLaravelCsrfToken = (path) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadToken = async () => {
      try {
        const response = await fetch(path, {
          credentials: "include",
          headers: {
            Accept: "text/html",
          },
        });

        if (!response.ok) {
          throw new Error(`Unable to load ${path} (${response.status})`);
        }

        const html = await response.text();
        const csrfToken = extractToken(html);

        if (!csrfToken) {
          throw new Error(`CSRF token not found on ${path}`);
        }

        if (active) {
          setToken(csrfToken);
          setError("");
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load CSRF token");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadToken();

    return () => {
      active = false;
    };
  }, [path]);

  return { token, loading, error };
};