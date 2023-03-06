import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { dataNavLinks } from "@/data/dataNavLinks";
import { NavLinkType, SubLinkType, TitleType } from "@/types/global";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [titleNav, setTitleNav] = useState<TitleType>("Services");
  const [isShowSubNav, setIsShowSubNav] = useState<boolean>(false);

  const handleSubLink = (navLink: NavLinkType) => {
    setTitleNav(navLink.title);
    if (titleNav === navLink.title) {
      setIsShowSubNav(!isShowSubNav);
      return;
    }
    setIsShowSubNav(true);
  };

  const handleCloseMenu = () => {
    setIsShowSubNav(false);
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full lg:h-[66px] z-[100] bg-white">
      <div className="container mx-auto">
        <div className="hidden lg:block">
          <div className="flex justify-between items-center py-3 row">
            <div className="lg:col-2 px-2">
              <div
                className="relative w-[130px] h-[36px] mr-4"
                onClick={() => handleCloseMenu()}
              >
                <Link href="/">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_Online_Logo.svg"
                    alt=""
                    height={0}
                    width={0}
                    className="w-full h-full"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:col-auto lg:col-7 lg:px-2 w-full font-medium">
              <ul className="flex justify-start">
                <NavLinks />
                <Link href="/partner" className="lg:mr-4 xl:mr-10">
                  <li>Partner</li>
                </Link>
                <Link href="/contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>

            <div className="lg:col-3">
              <div className="flex items-center justify-end">
                <button className="btn hover:opacity-70 transition-all  w-max inline-block py-2 px-6 lg:mr-3 bg-primary ">
                  Set Up Now
                </button>
                <button className="btn bg-white border-[1px] text-primary py-2 px-6 border-[#007eff] hover:bg-primary hover:text-white transition-all">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div className=" p-5 flex justify-between items-center  z-[100]">
            <div
              className="w-[130px] h-[36px] flex"
              onClick={() => handleCloseMenu()}
            >
              <Link href="/">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_Online_Logo.svg"
                  alt=""
                  height={36}
                  width={130}
                  className="w-full h-full"
                />
              </Link>
            </div>
            {!isOpen && (
              <div
                onClick={() => setIsOpen(true)}
                className={" transition-all duration-500"}
              >
                <Image
                  src={"/assets/icons/menu.png"}
                  alt=""
                  height={28}
                  width={28}
                />
              </div>
            )}
            {isOpen && (
              <div onClick={() => handleCloseMenu()}>
                <Image
                  src={"/assets/icons/close.png"}
                  alt=""
                  height={28}
                  width={28}
                />
              </div>
            )}
          </div>
          <motion.div
            className={`
            lg:hidden bg-white fixed w-full h-full shadow-lg transition-all duration-500  overflow-y-auto p-5  ${
              isOpen ? "left-0" : "left-[-100%]"
            }
            `}
          >
            <div className="container mx-auto">
              <div className=" p-2 flex items-center rounded-full w-full bg-white border border-blue-400">
                <div className="items-center justify-center flex">
                  <Image
                    src="/assets/icons/search.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-full px-2 focus:outline-none w-full"
                />
              </div>

              <button className="btn w-full py-2 px-6 lg:mr-3 bg-primary transition-all my-5">
                Set Up Now
              </button>

              <div className="flex flex-col">
                <div>
                  <ul>
                    {dataNavLinks.map((navLink: NavLinkType, index: number) => (
                      <li key={index} className="relative">
                        <div
                          className="py-2 font-semibold text-[17px]  flex justify-between items-center"
                          onClick={() => handleSubLink(navLink)}
                        >
                          <p>{navLink.title}</p>
                          <Image
                            src="assets/icons/chevron-down.svg"
                            alt=""
                            height={16}
                            width={16}
                          />
                        </div>
                        <motion.ul className={`pl-2`}>
                          {titleNav === navLink.title &&
                            isShowSubNav &&
                            navLink.subLinks.map(
                              (subLink: SubLinkType, index: number) => (
                                <motion.li
                                  key={index}
                                  className="flex items-center mb-3 cursor-none"
                                  variants={menuAnimation}
                                  initial="hidden"
                                  animate="show"
                                  exit="hidden"
                                >
                                  <Image
                                    src={subLink.srcIcon}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className="mr-2"
                                  />
                                  <p>{subLink.name}</p>
                                </motion.li>
                              )
                            )}
                        </motion.ul>
                      </li>
                    ))}

                    <li>
                      <Link href="/partner" onClick={() => handleCloseMenu()}>
                        <p className="py-2 font-semibold text-[17px] flex justify-between items-center">
                          Partner
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={() => handleCloseMenu()}>
                        <p className="py-2 font-semibold text-[17px] flex justify-between items-center">
                          Contact
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>

                <button className="btn mb-8 mt-8 bg-white border-[1px] text-primary py-2 px-6 border-[#007eff] hover:bg-primary hover:text-white transition-all">
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
