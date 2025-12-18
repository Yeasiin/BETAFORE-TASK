import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/HeaderMenu";
import HeaderTop from "@/components/HeaderTop";
import NewArrivals from "@/components/NewArrivals";
import ProductByCategory from "@/components/ProductByCategory";

export default async function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const params = await searchParams;

  return (
    <div>
      <HeaderTop />
      <HeaderMenu />
      <Categories />
      <NewArrivals />
      <ProductByCategory category={params.category} />
      <Footer />
    </div>
  );
}
