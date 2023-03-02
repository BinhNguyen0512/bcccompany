import { dataTier } from "@/data/dataTier";
import Image from "next/image";
import React, { useState } from "react";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";

const MemberShip = () => {
  const [selectIndexTab, setSelectIndexTab] = useState<number>(0);
  return (
    <section className="mb-[80px]">
      <div className="container mx-auto">
        <h2 className="text-center mb-8">
          Enjoy Great Benefit With Different Membership Tiers
        </h2>
        <p className="mb-5 text-center">
          We offer multi-tiered discounts for clients with these milestones
        </p>

        <Tabs className="hidden  md:block">
          <div className="grid grid-cols-2 rounded-md bg-white shadow-lg mx-4">
            <div>
              <TabList>
                {dataTier.map((tier: any, index: number) => (
                  <Tab key={index} onClick={() => setSelectIndexTab(index)}>
                    <div
                      className={`px-10 py-6 rounded-[10px] flex items-center justify-between ${
                        index === selectIndexTab &&
                        "bg-gradient-to-r from-[#1e2da8] via-[#2d4fc6] to-[#3768db]"
                      }`}
                    >
                      <div className="flex items-center">
                        <Image
                          src={tier.srcImage}
                          alt=""
                          height={54}
                          width={56}
                        />
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
              {dataTier.map((item: any, index: number) => (
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

        <Tabs className="block sm:hidden">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <TabList className="flex w-full justify-start items-center rounded-full px-3  mb-5 pb-4 border-0 overflow-x-scroll">
                {dataTier.map((tier: any, index: number) => (
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
              {dataTier.map((item: any, index: number) => (
                <TabPanel key={index}>
                  <div className="flex flex-col max-w-[255px] rounded-[10px] bg-white px-2">
                    <div className="flex justify-center p-4">
                      <div className="flex flex-col items-center">
                        <Image
                          src={item.srcImage}
                          alt=""
                          height={54}
                          width={56}
                        />
                        <h3 className="text-primary text-2xl mt-4">
                          {item.name}
                        </h3>
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
                        <span className="ml-2 font-normal">
                          {item.discount} *
                        </span>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              ))}
            </div>
          </div>
        </Tabs>
        <div className="mt-10 italic lg:text-lg text-base mx-4">
          <p>
            *Applicable on incorporation and annual renewal of all active
            companies, except Delaware, Singapore and the UK registered
            companies.
          </p>
          <p className="mt-4">
            *Information on tiers and discounts will be available in your
            <span className="cursor-pointer text-primary"> Client Portal</span>
            &#39;s account page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
