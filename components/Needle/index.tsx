import { dataNeedle } from "@/data/dataNeedle";
import { NeedleType } from "@/types/partner";
import Image from "next/image";
import React from "react";

const Needle = () => {
  return (
    <section className="mb-[80px]">
      <div className="container mx-auto">
        <h2 className="text-center mb-8">
          The One Partner That Moves The Needle
        </h2>
        <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-6 mx-4">
          {dataNeedle.map((item: NeedleType, index: number) => (
            <div key={index} className="flex flex-col">
              <Image
                src={item.srcImage}
                alt=""
                height={1216}
                width={2160}
                className="mb-5 p-4 max-h-[416px] object-contain"
              />

              <h3 className="lg:min-h-[72px] mb-5 text-xl lg:text-3xl">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Needle;
