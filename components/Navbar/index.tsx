import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-full lg:h-[66px] z-[100] bg-white">
      <div className="container mx-auto">
        <div className="hidden lg:block">
          <div className="flex justify-between items-center py-3 row">
            <div className="lg:col-2 px-2">
              <div className="relative w-[130px] h-[36px] mr-4">
                <Link href="/">
                  <Image
                    src="assets/logo_BBCIncorp.svg"
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
          <div className=" p-4 flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="assets/logo_BBCIncorp.svg"
                  alt=""
                  height={36}
                  width={130}
                />
              </Link>
            </div>
            {!isOpen && (
              <div onClick={() => setIsOpen(true)}>
                <Image
                  src={"/assets/icons/menu.png"}
                  alt=""
                  height={28}
                  width={28}
                />
              </div>
            )}
            {isOpen && (
              <div onClick={() => setIsOpen(false)}>
                <Image
                  src={"/assets/icons/close.png"}
                  alt=""
                  height={28}
                  width={28}
                />
              </div>
            )}
          </div>
          {isOpen && (
            <motion.div className="px-4 mt-4 shadow-lg">
              <div className="w-full bg-white mb-4">
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
              </div>

              <div>
                <ul>
                  <li>
                    <div className="py-2 font-semibold text-[17px]  flex justify-between items-center">
                      <p>Services</p>
                      <Image
                        src="assets/icons/chevron-down.svg"
                        alt=""
                        height={16}
                        width={16}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="py-2 font-semibold text-[17px] flex justify-between items-center">
                      <p>Resources</p>
                      <Image
                        src="assets/icons/chevron-down.svg"
                        alt=""
                        height={16}
                        width={16}
                      />
                    </div>
                  </li>
                  <li>
                    <p className="py-2 font-semibold text-[17px] flex justify-between items-center">
                      Partner
                    </p>
                  </li>
                  <li>
                    <p className="py-2 font-semibold text-[17px] flex justify-between items-center">
                      Contact
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <button className="btn w-full py-2 px-6 lg:mr-3 bg-primary transition-all my-5">
                  Set Up Now
                </button>
                <button className="btn mb-8 bg-white border-[1px] text-primary py-2 px-6 border-[#007eff] hover:bg-primary hover:text-white transition-all">
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
