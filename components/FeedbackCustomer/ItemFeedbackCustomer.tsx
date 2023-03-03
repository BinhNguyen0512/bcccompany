import { FeedbackCustomerType } from "@/types/home";
import Image from "next/image";
import React from "react";

interface Props {
  item: FeedbackCustomerType;
}

export const ItemFeedbackCustomer = (props: Props) => {
  const { item } = props;
  return (
    <div className="flex flex-col px-4 lg:px-8 py-5 rounded-3xl bg-white">
      <div className="flex justify-center">
        <div className="h-20 w-20 text-3xl mr-5 flex items-center justify-center font-bold bg-[#e6f5ee]">
          {item.abbreviations}
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-neutral-700">{item.nameCustomer}</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index: number) => (
              <div
                key={index}
                className="flex items-center justify-center mr-1 h-6  w-6 bg-[#00b67a] shadow-md"
              >
                <Image
                  src="assets/icons/star.svg"
                  alt=""
                  height={25}
                  width={25}
                />
              </div>
            ))}
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
            <p className="font-medium text-xl text-black">Trustpilot</p>
          </div>
        </div>
      </div>
      <p className="my-4 text-lg text-center font-semibold text-[#0042A3] opacity-[0.8]">
        {item.title}
      </p>
      <p className="font-light  text-gray-600 text-base">{item.description}</p>
    </div>
  );
};
