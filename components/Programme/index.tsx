import { dataProgramme } from "@/data/dataProgramme";
import { ProgrammeType } from "@/types/partner";
import Image from "next/image";
import React from "react";

export const Programme = () => {
  return (
    <section className="mb-[80px]">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="mb-5 text-center lg:text-start">
          <span>
            {`What Partners `}
            <br className="lg:block hidden" />
            Love About Our Programme
          </span>
        </h2>

        <ul className="lg:hidden block lg:pl-10 mt-6 mb-4">
          {dataProgramme.map((item: ProgrammeType, index: number) => (
            <li key={index} className="flex items-center mb-1">
              <Image
                src="/assets/icons/checkmark.png"
                alt=""
                height={16}
                width={16}
              />
              <p className="ml-2 text-lg font-normal tracking-wide">
                {item.title}
              </p>
            </li>
          ))}
        </ul>

        <div className="lg:pt-6 relative">
          <div className="flex justify-center">
            <Image
              src="/assets/programe-partner.png"
              alt=""
              height={304}
              width={540}
            />
          </div>
          <div className="lg:block hidden">
            {dataProgramme.map((item: ProgrammeType, index: number) => (
              <div
                key={index}
                className={`text-[#004099] max-w-[350px] min-w-[220px] absolute rounded-lg bg-white/50 text-lg font-medium  tracking-[0.1px] px-8 py-6 shadow-[0px_12px_32px_rgba(181,181,181,0.2)]`}
                style={{ top: item.top, left: item.left }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programme;
