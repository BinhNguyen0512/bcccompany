import { dataIndustry } from "@/data/dataIndustry";
import { IndustryType } from "@/types/home";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { ItemIndustry } from "./ItemIndustry";

const settings = {
  dots: true,
  arrows: false,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
};

const Industry = () => {
  return (
    <section className="mb-[80px]">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 px-10">Industry News & insights</h2>
        {/* mobile */}
        <div className="block lg:hidden px-4">
          <Slider className="h-full w-full lg:max-w-xl" {...settings}>
            {dataIndustry.map((item: IndustryType, index: number) => {
              return (
                <div key={index}>
                  <ItemIndustry item={item} />
                </div>
              );
            })}
          </Slider>
        </div>
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="flex flex-col flex-wrap ">
            <div className="grid grid-cols-12 rounded-3xl bg-white  transition-all duration-500 hover:scale-105 hover:shadow-[0px_0px_20px_#7c787833] cursor-pointer">
              <div className="col-span-7 pr-[15px]">
                <Image
                  src="/assets/Lunar-new-year.png"
                  alt=""
                  width={750}
                  height={422}
                  className="rounded-l-3xl m-0 w-full"
                />
              </div>
              <div className="col-span-5 px-[15px] py-4">
                <div className="flex flex-col items-center px-[15px] py-4 justify-center h-full">
                  <h3 className="line-camp-3 ">
                    Happy Lunar New Year 2023 - A short announcement
                  </h3>
                  <p className="mt-6 text-lg  line-clamp-3">
                    Best wishes and a short announcement for the Lunar New Year
                    2023 to all valued customers and partners!
                  </p>
                  <div className="mt-6 flex w-full justify-between">
                    <div className="flex items-center bg-[#002a66] rounded-full px-2 py-0.5">
                      <Image
                        src="assets/icons/announcements.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <p className="ml-2 text-white font-semibold">
                        Announcements
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="assets/icons/calendar.svg"
                        alt=""
                        height={24}
                        width={24}
                      />
                      <p className="ml-2 text-base text-[#001633]">
                        17 Jan 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[30px] mt-10 ">
              {dataIndustry.map((item: IndustryType, index: number) => {
                if (index === 0) return;
                return (
                  <div key={index}>
                    <ItemIndustry item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
