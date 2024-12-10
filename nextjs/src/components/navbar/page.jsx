"use client";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const navigation = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
  ];
  return (
    <div className="section">
      <header className="text-gray-600 body-font shadow-2xl ">
        <div className="mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link>
              <Image src="/m.png" width={80} height={80} className="md:ml-5" />
            </Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigation.map((item) => {
              return (
                <Link
                  href={item.path}
                  className="mr-5 hover:underline underline-offset-4 decoration-sky-500 text-gray-900 text-xl"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="relative">
            <span className="absolute right-[50%] top-[30%] ">{cartItems.length > 0 && cartItems.length}</span>
            <CiShoppingCart
              className="md:text-5xl text-3xl mr-3"
              onClick={() => router.push("/cart")}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
