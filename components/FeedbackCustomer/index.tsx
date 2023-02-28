import React, { RefObject, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import Image from "next/image";
import { dataFeedbackCustomer } from "@/data/dataFeedbackCustomer";

const settings = {
  dots: true,
  arrows: false,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
};

const FeedbackCustomer = () => {
  return (
    <section className="mb-[80px]">
      <div className="container mx-auto">
        <h2 className="text-center mb-5">Hear It From Our Valued Customers</h2>
        <p className="text-center mb-5">
          {`Clients talked about us on `}
          <span className="text-[#007EFF] font-medium">Trustpilot</span>
        </p>
        <div className="mt-8 lg:flex lg:justify-center mx-4">
          <div>
            <Slider className="h-full w-full lg:max-w-xl" {...settings}>
              {dataFeedbackCustomer.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col px-4 lg:px-8 py-5 rounded-3xl bg-white"
                  >
                    <div className="flex justify-center">
                      <div className="h-20 w-20 text-3xl mr-5 flex items-center justify-center font-bold bg-[#e6f5ee]">
                        {item.abbreviations}
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="mb-2 text-neutral-700">{item.name}</p>
                        <div className="flex">
                          <div className="flex items-center justify-center mr-1 h-6  w-6 bg-[#00b67a] shadow-md">
                            <Image
                              src="assets/icons/star.svg"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                          <div className="flex items-center justify-center mr-1 h-6  w-6 bg-[#00b67a] shadow-md">
                            <Image
                              src="assets/icons/star.svg"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                          <div className="flex items-center justify-center mr-1 h-6  w-6 bg-[#00b67a] shadow-md">
                            <Image
                              src="assets/icons/star.svg"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                          <div className="flex items-center justify-center mr-1 h-6  w-6 bg-[#00b67a] shadow-md">
                            <Image
                              src="assets/icons/star.svg"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                          <div className="flex items-center justify-center mr-1 h-6  w-6 bg-[#00b67a] shadow-md">
                            <Image
                              src="assets/icons/star.svg"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="mr-0.5">
                            <Image
                              src="assets/icons/star_green.svg"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                          <p className="font-medium text-xl text-black">
                            Trustpilot
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="my-4 text-lg text-center font-semibold text-[#0042A3] opacity-[0.8]">
                      {item.title}
                    </p>
                    <p className="font-light  text-gray-600 text-base">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCustomer;
