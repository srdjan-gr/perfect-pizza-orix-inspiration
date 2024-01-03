"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../../public/img/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ];

  return (
    <nav className="w-full">
      <div className="bg-gray-100 my-5 rounded-3xl max-w-[1440px] m-auto">
        <div className=" max-w-7xl flex justify-between items-center m-auto py-2 px-3 lg:px-0">
          <Image src={Logo} height={50} width={50} />

          <div className="hidden md:flex justify-center items-center gap-10 text-gray-800 bg-white px-10 py-2 rounded-full border-[1px] border-white">
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${
                    pathname === item.href &&
                    " decoration-pizza_black bg-gray-100 py-1 px-5 rounded-full"
                  } link_hover`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <Link
            className="btn_ghost border-[1px] border-pizza_orange-50  hover:bg-pizza_orange-50 text-pizza_black hover:text-white"
            href={"/login"}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
