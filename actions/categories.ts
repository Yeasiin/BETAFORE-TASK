"use server"

export async function getCategories() {
    try {
        const res = await fetch(
            `${process.env.API_BASE_URL}/products/categories`
        );

        if (!res.ok) {
            return { success: false, message: "Failed to fetch categories" };
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
