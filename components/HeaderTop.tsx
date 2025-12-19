import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";
import Link from "next/link";
import HeadsetIcon from "./icons/HeadsetIcon";
import AvatarIcon from "./icons/AvatarIcon";
import HeartIcon from "./icons/HeartIcon";
import CartIcon from "./icons/CartIcon";

export default function HeaderTop() {
  return (
    <div className="bg-[#03484D] py-2">
      <div className="container mx-auto">
        <div className="flex justify-between gap-12">
          <div className="flex items-center gap-10 flex-1 ">
            <Image
              src="/logo.svg"
              height={0}
              width={130}
              className="h-auto w-auto"
              loading="eager"
              alt="Win Store"
            />
            <div className="flex text-sm items-center bg-white rounded overflow-hidden w-full">
              <select className="py-1.5 pl-3 mr-3  outline-0 text-gray-400 ">
                <option value="">All Categories</option>
                <option value="electronic">Electronic</option>
                <option value="cosmetic">Cosmetic</option>
                <option value="clothing">Clothing</option>
              </select>
              <input
                className="py-1.5 placeholder:text-gray-400 outline-0 border-l-2 border-gray-300 pr-2 pl-4 w-full"
                type="text"
                placeholder="Search for products"
                name=""
                id=""
              />
              <button className="bg-[#B6B6B6] py-1.5 px-2">
                <SearchIcon size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6 mr-6 xl:flex-1">
            <div className="text-white">
              <p className="text-xs ">Call Us Now</p>
              <div className="flex">
                <HeadsetIcon />{" "}
                <Link className="ml-1.5 text-sm" href={"tel:+0115827918"}>
                  +011 5827918
                </Link>
              </div>
              <Link className="text-sm" href={"/login"}>
                Sign In
              </Link>
            </div>
            <Link href={"/login"}>
              <AvatarIcon />
            </Link>
            <Link href={"/favorite"}>
              <HeartIcon />
            </Link>
            <Link href="/cart" className="relative flex text-white gap-2">
              <CartIcon />
              <span className="text-sm absolute -top-3.5 left-3 text-yellow-300">
                3
              </span>
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
