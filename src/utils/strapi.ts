// Basic configuration
export const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

/**
 * Helper to get the full URL for an image hosted in Strapi
 * @param path The partial path from Strapi response (e.g. /uploads/image.jpg)
 * @returns Full URL (e.g. http://localhost:1337/uploads/image.jpg)
 */
export const getStrapiMedia = (path: string | null | undefined) => {
  if (!path) return null;
  if (path.startsWith("http") || path.startsWith("//")) return path;
  return `${STRAPI_URL}${path}`;
};



/**
 * Fetch data from Strapi REST API
 * @param endpoint The endpoint to fetch from (e.g. /heroes?populate=*)
 * @returns The JSON response
 */
export const fetchFromStrapi = async (endpoint: string) => {
  try {
    const res = await fetch(`${STRAPI_URL}/api${endpoint}`);
    if (!res.ok) {
      throw new Error(`Error fetching from Strapi: ${res.statusText}`);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
};
