import { IndustryType } from "@/types/home";
import Image from "next/image";
import React from "react";

interface Props {
  item: IndustryType;
}

export const ItemIndustry = (props: Props) => {
  const { item } = props;
  return (
    <div className="flex flex-col rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-[0px_0px_20px_#7c787833] cursor-pointer shadow-sm">
      <Image
        src={item.srcImage}
        alt=""
        height={442}
        width={750}
        className="rounded-3xl"
      ></Image>
      <div className="py-4 px-6">
        <h3 className="line-clamp-2">{item.title}</h3>

        <p className="mt-6 text-lg line-clamp-3">{item.description}</p>

        <div className="mt-6 flex w-full justify-between">
          <div className="flex items-center bg-[#002a66] rounded-full px-2 py-0.5">
            <Image src={item.iconCategory} alt="" width={16} height={16} />
            <p className="ml-2 text-white font-semibold">{item.nameCategory}</p>
          </div>
          <div className="flex items-center">
            <Image
              src="assets/icons/calendar.svg"
              alt=""
              height={24}
              width={24}
            ></Image>
            <p className="ml-2 text-base text-[#001633]">{item.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
