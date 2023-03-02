import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[66px] z-[100] bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3 row">
          <div className="lg:col-2 px-2">
            <div className="relative w-[130px] h-[36px] mr-4">
              <Link href="/">
                <Image src="assets/logo_BBCIncorp.svg" alt="" fill />
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
              <button className="btn w-max inline-block py-2 px-6 lg:mr-3 bg-primary transition-all ">
                Set Up Now
              </button>
              <button className="btn bg-white border-[1px] text-primary py-2 px-6 border-[#007eff] hover:bg-primary hover:text-white transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
