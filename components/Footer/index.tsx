import Image from "next/image";
import Link from "next/link";
import React from "react";

const srcIconsSocial = [
  "assets/icons/twitter-layout.svg",
  "assets/icons/fb-layout.svg",
  "assets/icons/linkedin-layout.svg",
  "assets/icons/youtube-layout.svg",
];

const srcIconsPayment = [
  "assets/visa-layout.svg",
  "assets/stripe-layout.svg",
  "assets/american_express-layout.svg",
  "assets/mastercard-layout.svg",
  "assets/jcb-layout.svg",
  "assets/discover-layout.svg",
];

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
          priority
        />
      </div>
      <div className="w-full px-4 pt-8 bg-[#001633]">
        <div className="container mx-auto">
          <div className="pb-8 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-between pb-4 ">
                <div className="h-[39px] w-[138px] flex justify-start">
                  <Link href="/">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_Online_Logo.svg"
                      alt=""
                      height={39}
                      width={138}
                      className="h-full w-full"
                    />
                  </Link>
                </div>
                <div className="flex  items-center justify-between lg:hidden">
                  {srcIconsSocial.map((srcIcon: string) => (
                    <div
                      key={srcIcon}
                      className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]"
                    >
                      <Image src={srcIcon} alt="" height={16} width={16} />
                    </div>
                  ))}
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
                <p className="ml-2 text-[#b3b9c2] text-sm">bcconline@BCC.com</p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/phone.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">(+84) 981376700</p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/phone.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">(+84) 9837 2222</p>
              </div>
              <div className="flex items-center mb-0.5">
                <Image
                  src="assets/icons/location.svg"
                  alt=""
                  height={17}
                  width={17}
                />
                <p className="ml-2 text-[#b3b9c2] text-sm">
                  8350 W. Grandridge Blvd Ste 200, Kennewick, WA 99336
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
                  Al. Piłsudskiego 6/1, Białystok, Poland
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
                  {srcIconsPayment.map((srcIcon: string) => (
                    <div key={srcIcon}>
                      <Image src={srcIcon} alt="" height={36} width={64} />
                    </div>
                  ))}
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
                  {srcIconsSocial.map((srcIcon: string) => (
                    <div
                      key={srcIcon}
                      className="mr-2 flex items-center justify-center rounded-lg bg-white w-[34px] h-[34px]"
                    >
                      <Image src={srcIcon} alt="" height={16} width={16} />
                    </div>
                  ))}
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
