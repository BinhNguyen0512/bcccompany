import { dataTier } from "@/data/dataTier";
import { TierType } from "@/types/partner";
import Image from "next/image";
import React, { Dispatch } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

interface Props {
  setSelectIndexTab: Dispatch<React.SetStateAction<number>>;
  selectIndexTab: number;
}

export const TabsTierMobile = (props: Props) => {
  const { setSelectIndexTab, selectIndexTab } = props;

  return (
    <Tabs className="block sm:hidden">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <TabList className="flex w-full justify-start items-center rounded-full px-3  mb-5 pb-4 border-0 overflow-x-scroll">
            {dataTier.map((tier: TierType, index: number) => (
              <Tab
                key={index}
                onClick={() => setSelectIndexTab(index)}
                className={`mr-2 rounded-full text-sm ${
                  index === selectIndexTab
                    ? "border-primary text-primary border-[1px]"
                    : "text-gray-400 border-none"
                } font-medium leading-6  px-4 py-2 w-fit whitespace-nowrap focus:outline-none`}
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
        </div>
        <div>
          {dataTier.map((item: TierType, index: number) => (
            <TabPanel key={index}>
              <div className="flex flex-col max-w-[255px] rounded-[10px] bg-white px-2">
                <div className="flex justify-center p-4">
                  <div className="flex flex-col items-center">
                    <Image src={item.srcImage} alt="" height={54} width={56} />
                    <h3 className="text-primary text-2xl mt-4">{item.name}</h3>
                  </div>
                </div>
                <ul className="mx-auto mb-6 mt-2 text-gray-600 text-base pl-4 ">
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
                      height={16}
                      width={16}
                      className="w-4 h-4"
                    />
                    <span className="ml-2 font-normal">{item.discount} *</span>
                  </li>
                </ul>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </Tabs>
  );
};
