import { dataServices } from "@/data/dataServices";
import { ServicesType } from "@/types/home";
import Image from "next/image";
import React from "react";
import { ItemService } from "./ItemService";

const Services = () => {
  return (
    <section className="mb-10 lg:my-0 lg:pt-40 relative bg-[#f1fbfe]">
      <div className="hidden lg:block">
        <Image
          src="assets/curve_home-wave.svg"
          alt=""
          height={158}
          width={1920}
          className="absolute w-full top-0"
        />
      </div>
      <div className="container mx-auto">
        <h2 className="mb-6 pt-10 text-center  lg:text-left">
          Be Free From Corporate Hassles And Complexities
        </h2>
        <p className="text-black mb-8 font-light text-center lg:text-left">
          Discover our wide range of digital corporate services that helps you
          set your business for success and growth.
        </p>
        <div className="flex flex-col">
          {dataServices.map((item: ServicesType, index: number) => {
            return (
              <div key={index}>
                <ItemService item={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
