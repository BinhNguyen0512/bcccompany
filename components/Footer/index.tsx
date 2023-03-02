import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/assets/footer-layout.png"
          alt=""
          height={204}
          width={1920}
          className="w-full"
        />
      </div>
      <div className="w-full px-4 pt-8 bg-[#001633]">
        <div className="container mx-auto">
          <div className="pb-8 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-between pb-4 ">
                <div>
                  <Image
                    src="assets/logo_white-layout.svg"
                    alt=""
                    height={39}
                    width={138}
                    className="h-full w-full"
                  />
                </div>
                <div className="flex  items-center justify-between lg:hidden">
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/twitter-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/fb-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/linkedin-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/youtube-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                </div>
              </div>

              <h4 className="mb-1">About Us</h4>
              <h4 className="mb-1">Contact</h4>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/email.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">
                  service@bbcincorp.com
                </p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/phone.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">(+852) 8192 8666</p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/phone.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">(+65 3138 1666)</p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/location.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">
                  Room 9, 4F, Beverley Commercial Centre, 87-105 Chatham road
                  South, Tsim Sha Tsui, Kowloon, Hong Kong
                </p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/location.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">
                  68 Circular road, #02-01 Singapore (049422), Singapore
                </p>
              </div>

              <div className="mt-6 flex">
                <div className="mr-5  max-h-20 lg:mr-8">
                  <Image
                    src="assets/dmca-layout.svg"
                    alt=""
                    height={80}
                    width={160}
                  />
                </div>
                <div className="grid grid-cols-3 gap-1 lg:gap-2">
                  <Image
                    src="assets/visa-layout.svg"
                    alt=""
                    height={36}
                    width={64}
                  />
                  <Image
                    src="assets/stripe-layout.svg"
                    alt=""
                    height={36}
                    width={64}
                  />
                  <Image
                    src="assets/american_express-layout.svg"
                    alt=""
                    height={36}
                    width={64}
                  />
                  <Image
                    src="assets/mastercard-layout.svg"
                    alt=""
                    height={36}
                    width={64}
                  />
                  <Image
                    src="assets/jcb-layout.svg"
                    alt=""
                    height={36}
                    width={64}
                  />
                  <Image
                    src="assets/discover-layout.svg"
                    alt=""
                    height={36}
                    width={64}
                  />
                </div>
              </div>
            </div>
            <div className="hidden col-span-3 lg:block">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h4>Our services</h4>
                  <ul className="mb-6 text-[#b3b9c2] text-sm">
                    <li className="pb-3">Company Registration</li>
                    <li className="pb-3">Open Bank Account</li>
                    <li className="pb-3">Accountinng, Auditing & Tax Filing</li>
                    <li className="pb-3">Virtual Office</li>
                    <li className="pb-3">Immigration Service</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h4>Userful Links</h4>
                  <ul className="mb-6 text-[#b3b9c2] text-sm">
                    <li className="pb-3">Become Our Partner</li>
                    <li className="pb-3">Payment Guideline</li>
                    <li className="pb-3">Make Payment</li>
                    <li className="pb-3">Order Process</li>
                    <li className="pb-3">Whitelist Guide</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden col-span-3 lg:block">
              <div className="flex flex-col">
                <h4>Our services</h4>
                <ul className="mb-6 text-[#b3b9c2] text-sm">
                  <li className="pb-3">Terms of Service</li>
                  <li className="pb-3">Legal Agreement</li>
                  <li className="pb-3">Refund Policy</li>
                  <li className="pb-3">Privacy Policy</li>
                  <li className="pb-3">FATCA Policy</li>
                </ul>
              </div>

              <div className="hidden lg:block">
                <div className="flex">
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/twitter-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/fb-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/linkedin-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]">
                    <Image
                      src="assets/icons/youtube-layout.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
