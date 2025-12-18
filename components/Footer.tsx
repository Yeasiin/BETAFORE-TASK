import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <>
      <div className="bg-[#393939] py-16">
        <div className="container mx-auto px-16  ">
          <div className="flex justify-between text-white ">
            <div className="">
              <Image
                src="/logo.svg"
                height={0}
                width={130}
                className="h-auto w-auto"
                loading="eager"
                alt="Win Store"
              />

              <p className="text-[#00CAD7] text-lg my-3 leading-none">
                Got questions? Call us 24/7!
              </p>
              <div className="mb-3 text-sm">
                <p>03 111 666 144</p>
                <p>0317 1777015</p>
              </div>
              <p className="text-[#00CAD7] text-lg leading-none ">
                Contact info
              </p>
              <p className="text-sm">info@winstore.pk</p>

              <div className="flex items-center gap-4 mt-3">
                <Link href="" target="_blank">
                  <FacebookIcon />
                </Link>
                <Link href="" target="_blank">
                  <TwitterIcon />
                </Link>
                <Link href="" target="_blank">
                  <LinkedinIcon />
                </Link>
                <Link href="" target="_blank">
                  <InstagramIcon />
                </Link>
              </div>
            </div>

            <div className="">
              <h3 className="text-[#00CAD7] text-xl">Trending</h3>
              <ul className="text-sm mt-5 space-y-1.5">
                <li>
                  <Link href="">Installments</Link>
                </li>
                <li>
                  <Link href="#">Electronics</Link>
                </li>
                <li>
                  <Link href="#">Grocery</Link>
                </li>
                <li>
                  <Link href="#">Health & Beauty</Link>
                </li>
                <li>
                  <Link href="#">Home Appliances</Link>
                </li>
                <li>
                  <Link href="#">Mobile Accessories</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-[#00CAD7] text-xl">Information</h3>
              <ul className="text-sm mt-5 space-y-1.5">
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Shipping & Return</Link>
                </li>
                <li>
                  <Link href="#">Privacy policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-[#00CAD7] text-xl">Customer Care</h3>
              <ul className="text-sm mt-5 space-y-1.5">
                <li>
                  <Link href="">My Account</Link>
                </li>
                <li>
                  <Link href="#">Track Your Order</Link>
                </li>
                <li>
                  <Link href="#">Recently Viewed</Link>
                </li>
                <li>
                  <Link href="#">Wishlist</Link>
                </li>
                <li>
                  <Link href="#">Compare</Link>
                </li>
                <li>
                  <Link href="#">Become a Vendor</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-5">
            <Image
              src={"/visa-card.png"}
              height={120}
              width={120}
              unoptimized={true}
              alt="Visa Card"
            />
            <Image
              src={"/mastercard.png"}
              height={120}
              width={120}
              unoptimized={true}
              alt="Master Card"
            />
            <Image
              src={"/cod.png"}
              height={120}
              width={120}
              unoptimized={true}
              alt="Cash On Delivery"
            />
            <Image
              src={"/eip.png"}
              height={120}
              width={120}
              unoptimized={true}
              alt="easy installment plan"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#161616] py-3.5">
        <div className="container mx-auto px-12">
          <p className="text-white">
            &copy; 2025 Winstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
