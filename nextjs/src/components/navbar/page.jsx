import { Image, Link } from '@nextui-org/react';
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
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
    <div className='section'>
      <header className="text-gray-600 body-font shadow-2xl ">
        <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link>
              <Image src='ecom2.png' width={80} height={80} className='md:ml-5' />
            </Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigation.map((item) => {
              return (
                <Link href={item.path}
                  className="mr-5 hover:underline underline-offset-4 decoration-sky-500 text-gray-900"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <Link >
            <CiShoppingCart className='md:text-5xl text-3xl mr-3' />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar
