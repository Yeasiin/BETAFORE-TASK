import { getProducts } from "@/actions/products";
import NewArrivalSlider from "./slider/NewArrivalSlider";

export default async function NewArrivals() {
  const products = await getProducts("limit=10");

  return (
    <div className="container mx-auto pt-10 pb-6 px-2">
      <h2 className="text-2xl ml-4 mb-5">
        <span className="text-[#00CAD7]">New</span> Arrivals
      </h2>
      {products.success ? (
        <NewArrivalSlider products={products.data} />
      ) : (
        <div>{products.message}</div>
      )}
    </div>
  );
}
