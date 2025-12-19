"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const categories = [
  { name: "Electronics", href: "/category/electronics" },
  { name: "Fashion", href: "/category/fashion" },
  { name: "Home & Living", href: "/category/home-living" },
  { name: "Sports", href: "/category/sports" },
  { name: "Books", href: "/category/books" },
];
export default function BrowseByCategoryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="flex text-white items-center gap-2 mr-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
        <p className="max-sm:text-sm">Browse By Category</p>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-md shadow-lg py-2 min-w-50">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0E3B3E] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
