"use server"

export async function getProducts(param?: string) {
    try {
        const url = `${process.env.API_BASE_URL}/products${param ? "?" + param : ""}`
        const res = await fetch(url);
        if (!res.ok) {
            return { success: false, message: "Failed to fetch products" };
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}
export async function getProductsByCategory(category?: string) {
    try {
        const url = `${process.env.API_BASE_URL}/products/category/${category}`
        const res = await fetch(url);
        if (!res.ok) {
            return { success: false, message: "Failed to fetch products by category" };
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}
