import { dataServices } from "@/data/dataServices";
import { ServicesType } from "@/types/home";
import Image from "next/image";
import React from "react";

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
                <div className="lg:block hidden">
                  <div className="lg:grid lg:grid-cols-12 ">
                    {index % 2 === 0 && <div className="col-span-1" />}
                    {index % 2 !== 0 && (
                      <div className="text-black col-span-6">
                        <Image
                          src={item.srcImage}
                          alt=""
                          height={541}
                          width={540}
                        />
                      </div>
                    )}
                    <div className="text-black col-span-5">
                      <div className="h-full flex flex-col justify-center px-4">
                        <h3 className="mb-6">{item.title}</h3>
                        <p className="mb-6 font-light text-lg tracking-wider">
                          {item.description}
                        </p>
                        <button className="btn w-[200px] py-2 px-6 text-base bg-white text-[#007EFE] border-[1px] border-[#007EFE] hover:bg-primary hover:text-white transition-all">
                          Explore
                        </button>
                      </div>
                    </div>
                    {index % 2 === 0 && (
                      <div className="text-black col-span-6">
                        <Image
                          src={item.srcImage}
                          alt=""
                          height={541}
                          width={540}
                        />
                      </div>
                    )}
                    {index % 2 !== 0 && <div className="col-span-1" />}
                  </div>
                </div>
                <div className="lg:hidden block">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <Image
                        src={item.srcImage}
                        alt=""
                        height={541}
                        width={540}
                      />
                    </div>
                    <div className="text-black ">
                      <div className="h-full flex flex-col justify-start px-4">
                        <h3 className="mb-6">{item.title}</h3>
                        <p className="mb-6 font-light text-lg tracking-wider">
                          {item.description}
                        </p>
                        <div className="flex justify-center ">
                          <button className=" btn w-[200px] py-2 px-6 text-base bg-white text-[#007EFE] border-[1px] border-[#007EFE] hover:bg-primary hover:text-white transition-all">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
