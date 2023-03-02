import { dataTier } from "@/data/dataTier";
import { TierType } from "@/types/partner";
import Image from "next/image";
import React, { Dispatch } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

interface Props {
  setSelectIndexTab: Dispatch<React.SetStateAction<number>>;
  selectIndexTab: number;
}
export const TabsTierDesktop = (props: Props) => {
  const { setSelectIndexTab, selectIndexTab } = props;

  return (
    <Tabs className="hidden  md:block">
      <div className="grid grid-cols-2 rounded-md bg-white shadow-lg mx-4">
        <div>
          <TabList>
            {dataTier.map((tier: TierType, index: number) => (
              <Tab key={index} onClick={() => setSelectIndexTab(index)}>
                <div
                  className={`px-10 py-6 rounded-[10px] flex items-center justify-between ${
                    index === selectIndexTab &&
                    "bg-gradient-to-r from-[#1e2da8] via-[#2d4fc6] to-[#3768db]"
                  }`}
                >
                  <div className="flex items-center">
                    <Image src={tier.srcImage} alt="" height={54} width={56} />
                    <h3
                      className={`ml-8  ${
                        index === selectIndexTab
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  <input
                    type="radio"
                    checked={index === selectIndexTab}
                    readOnly
                    className="h-[16px] w-[16px]"
                  />
                </div>
              </Tab>
            ))}
          </TabList>
        </div>
        <div className="p-6">
          {dataTier.map((item: TierType, index: number) => (
            <TabPanel key={index}>
              <div className="flex flex-col">
                <div className="flex justify-center p-4">
                  <div className="relative mx-auto h-40 w-40 p-2">
                    <div
                      className={`absolute top-0 left-0 h-full w-full rounded-full `}
                      style={{
                        background: item.bgColor,
                      }}
                    />
                    <div className=" relative  h-full w-full flex flex-col items-center  justify-center rounded-full bg-white">
                      <p className="font-semibold text-xl text-[#333333] tracking-wide">
                        Save
                      </p>
                      <h4 className="text-[#004099] font-bold text-3xl mt-1 pb-1">
                        US${item.price}
                      </h4>
                      <p className="text-sm italic leading-6 font-medium">
                        per each
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mx-auto my-6 text-gray-600 text-lg ">
                  <li className="flex items-center mb-2">
                    <Image
                      src="/assets/icons/check-partner.png"
                      alt=""
                      height={17}
                      width={16}
                    />
                    <p className="ml-2 font-medium">
                      {item.numberActive} active companies
                    </p>
                  </li>
                  <li className="flex items-center">
                    <Image
                      src="/assets/icons/mark-partner.png"
                      alt=""
                      height={17}
                      width={16}
                    />
                    <p className="ml-2 font-normal">{item.discount} *</p>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <button className="btn w-[200px] py-2 px-6 text-base bg-white text-[#007EFE] border-[1px] border-gray-400 hover:bg-primary hover:text-white transition-all">
                    Talk To Us
                  </button>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </Tabs>
  );
};
