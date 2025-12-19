import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function HeaderMenu() {
  return (
    <div className="bg-[#0E3B3E] py-2.5 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="flex text-white items-center gap-2 mr-6">
              <HamburgerIcon />
              <p>Browse By Category</p>
            </div>
            <div className=""></div>
            <div className="text-white  flex text-sm gap-6 max-lg:hidden">
              <Link href="/">Home</Link>
              <Link href="/">Easy Monthly Installments</Link>
              <Link href="/">Shop by Brands</Link>
              <Link href="/">Become a Vendor</Link>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-5 items-center">
            <Link href={"https://facebook.com"} target="_blank">
              <FacebookIcon />
            </Link>
            <Link href={"https://twitter.com"} target="_blank">
              <TwitterIcon />
            </Link>
            <Link href={"https://linkedin.com"} target="_blank">
              <LinkedinIcon />
            </Link>
            <Link href={"https://instagram.com"} target="_blank">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
