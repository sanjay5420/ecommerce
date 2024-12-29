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
      path: "/modules/Product",
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
    <div className="shadow-md">
      <header className="text-gray-600 w-[80%] ml-auto mr-auto">
        <div className="mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link onClick={()=>router.push('/')}>
              <Image src="/m.png" width={80} height={80} className="md:ml-5" />
            </Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            {navigation.map((item) => {
              return (
                <Link
                  href={item.path}
                  className="mr-5 hover:underline underline-offset-4 decoration-orange-500 text-gray-600 text-xl"
                >
                  <span className="font-sans">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex gap-3 mr-5 text-md">
          <div onClick={()=>router.push('/login')} className="cursor-pointer font-sans">Login</div>
          <div onClick={()=>router.push('/register')} className="cursor-pointer font-sans">SignUp</div>
          </div>

          <div className="relative">
            <span className="absolute right-[50%] top-[25%]">{cartItems.length > 0 && cartItems.length}</span>
            <CiShoppingCart
              className="md:text-5xl text-3xl mr-3"
              onClick={() => router.push("/modules/cart")}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
