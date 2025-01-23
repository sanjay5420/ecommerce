"use client";
import { getUserDetails, logoutUser } from "@/redux/reducerSlices/userSlice";
import { Button, Link } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, } from "@nextui-org/react";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userToken, isLoggedIn, userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch()
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
      path: "/modules/contact",
    },
  ];

  const getUser = async () => {
    const token = userToken?.access_token
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL2}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (data) {
        dispatch(getUserDetails(data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   if(isLoggedIn) getUser()
  
  }, [])

  return (
    <div className="shadow-md">

      <header className="text-gray-600 w-[80%] ml-auto mr-auto">
        <div className="mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link onClick={() => router.push('/')}>
              <Image alt="logo" src="/m.png" width={80} height={80} className="md:ml-5" />
            </Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.id}
                  onClick={() => router.push(item.path)}
                  className="mr-5 hover:underline underline-offset-4 decoration-orange-500 text-gray-600 text-xl"
                >
                  <span className="font-sans cursor-pointer">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          {!isLoggedIn ?
            <div className="flex gap-3 mr-5 text-md">
              <div onClick={() => router.push('/login')} className="cursor-pointer font-sans">Login</div>
              <div onClick={() => router.push('/register')} className="cursor-pointer font-sans">SignUp</div>
            </div>
            : <div className="flex gap-3 justify-center items-center">
              <p className="font-semibold text-pink-800"> Hi {userDetails?.name}</p>
              <div className="flex items-center gap-4">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      src={userDetails?.avatar}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">{userDetails?.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger" className="text-red-500" onClick={() => dispatch(logoutUser())}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>}

          <div className="relative"   onClick={() => router.push("/modules/cart")}>
            <span className="absolute md:right-[50%] md:top-[25%] right-[50%] top-[9%] cursor-pointer">{cartItems.length > 0 && cartItems.length}</span>
            <CiShoppingCart
              className="md:text-5xl text-3xl mr-3 cursor-pointer"
            
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
