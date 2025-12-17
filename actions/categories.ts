"use server"

export async function getCategories() {
    try {
        const res = await fetch(
            "https://mm-assesment-server.vercel.app/api/v1/products/categories"
        );

        if (!res.ok) {
            throw new Error("Failed to fetch categories");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
