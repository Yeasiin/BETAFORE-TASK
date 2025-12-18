import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/HeaderMenu";
import HeaderTop from "@/components/HeaderTop";
import NewArrivals from "@/components/NewArrivals";
import ProductByCategory from "@/components/ProductByCategory";

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <HeaderMenu />
      <Categories />
      <NewArrivals />
      <ProductByCategory />
      <Footer />
    </div>
  );
}
