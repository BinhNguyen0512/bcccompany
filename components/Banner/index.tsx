import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative lg:min-h-[78vh] mb-[80px]">
      <div
        className="absolute left-0 top-0 h-full w-full z-[-1]
          bg-gradient-to-r
        from-[#D8F3F7]
          via-[#D9E5F9]
          to-[#D7C6FD]
          background-animate
          "
      ></div>
      <div className="min-h-[550px] pt-[66px] flex items-center">
        <div className="container mx-auto py-10 px-2 lg:px-0">
          <div className=" flex justify-between ">
            <div className="lg:col-6">
              <div className="flex flex-col mt-12">
                <h1 className="lg:mb-8 mb-6 lg:text-left  text-center">
                  Let&#39;s streamline your Vietnam business
                </h1>
                <p className="lg:mb-10 mb-8 lg:text-left text-center text-lg">
                  We simplify your Vietnam company setup procedures and
                  administrative tasks with tailor-made solutions and seamless
                  experience.
                </p>
                <div className="mb-10 lg:mb-10">
                  <div className="flex flex-col justify-between rounded-full py-1 pr-1 text-base lg:h-[50px] lg:flex-row lg:bg-white">
                    <div className="flex flex-grow items-center mb-4 lg:mb-0 lg:px-4">
                      <input
                        placeholder="Your company name"
                        id="ipt-company-name"
                        className="w-full truncate rounded-full text-base bg-white px-4 py-2 outline-none lg:mb-0"
                      />
                    </div>

                    <div className="lg:max-w-[237px]">
                      <button className="btn h-full w-full truncate  py-2 px-6 text-base">
                        Register Your Company
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-6">
              <div>
                <Image
                  src="/assets/banner-vn-home.png"
                  alt=""
                  width={1059}
                  height={815}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Image src="assets/exclude-wave.svg" alt="" width={1920} height={95} />
      </div>
    </section>
  );
};

export default Banner;
