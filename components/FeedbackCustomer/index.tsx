import React, { RefObject, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import Image from "next/image";
import { dataFeedbackCustomer } from "@/data/dataFeedbackCustomer";
import { FeedbackCustomerType } from "@/types/home";
import { ItemFeedbackCustomer } from "./ItemFeedbackCustomer";

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
              {dataFeedbackCustomer.map(
                (item: FeedbackCustomerType, index: number) => {
                  return (
                    <div key={index}>
                      <ItemFeedbackCustomer item={item} />
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCustomer;
