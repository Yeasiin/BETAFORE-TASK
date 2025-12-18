"use server"

export async function getProducts(param?: string) {
    try {
        const url = `https://mm-assesment-server.vercel.app/api/v1/products${param ? "?" + param : ""}`
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to fetch categories");
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
export async function getProductsByCategory(category?: string) {
    try {
        const url = `https://mm-assesment-server.vercel.app/api/v1/products/category/${category}`
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to fetch products by category");
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}
