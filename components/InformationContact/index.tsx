import Image from "next/image";
import React, { useState } from "react";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";

interface OptionType {
  value: number;
  label: string;
}

const options: OptionType[] = [
  {
    value: 1,
    label: "Incorporation Services",
  },
  {
    value: 2,
    label: "Bank account support",
  },
  {
    value: 3,
    label: "Virtual office",
  },
  {
    value: 4,
    label: "Legal ancillary service",
  },
  {
    value: 5,
    label: "Accounting and auditing",
  },
  {
    value: 6,
    label: "Others",
  },
];

const styleInput =
  "mb-6 w-full text-lg border-b bg-white p-2 border-gray-300 text-black placeholder-gray-300 focus:outline-none focus:border-b-blue-400";

const customStyle: any = {
  control: (provided: HTMLSelectElement, state: { isFocused: boolean }) => {
    return {
      ...provided,
      borderColor: state.isFocused ? "#007eff" : "#E2E8F0",
      boxShadow: state.isFocused ? "0 0 0 1px #007eff" : "none",
      borderRadius: 2,
      height: 48,
      ":hover": {
        borderColor: state.isFocused ? "#007eff" : "#CBD5E0",
      },
    };
  },
  indicatorSeparator: (provided: HTMLSelectElement) => ({
    ...provided,
    display: "none",
  }),
  menuList: (provided: HTMLSelectElement) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: "lg",
  }),
  option: (provided: HTMLSelectElement) => ({
    ...provided,
    backgroundColor: "none",
    color: "#3F4647",
    ":hover": {
      color: "#007eff",
      cursor: "pointer",
    },
  }),
};

interface InformationType {
  srcImage: string;
  info: string;
}

const information: InformationType[] = [
  {
    srcImage: "assets/icons/phone-circle.svg",
    info: "(+84) 981376700 - (+84) 9837 2222",
  },
  {
    srcImage: "assets/icons/location-circle.svg",
    info: "8350 W. Grandridge Blvd Ste 200, Kennewick, WA 99336",
  },
  {
    srcImage: "assets/icons/location-circle.svg",
    info: "68 Circular road, #02-01 Singapore (049422), Singapore",
  },
];

const InformationContact = () => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(
    options[0]
  );

  const handleChangeOption = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 px-4 lg:px-0">
            <div className="w-full py-8 px-8 lg:py-10 lg:px-14 rounded-xl bg-white shadow-lg">
              <p className="mb-6 lg:10 font-light tracking-wider text-lg">
                All information entered on this form will be kept strictly
                confidential and subject to our privacy policy.
              </p>
              <input
                type="text"
                placeholder="First Name*"
                required
                className={styleInput}
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                className={styleInput}
              />
              <input
                type="text"
                placeholder="Email*"
                required
                className={styleInput}
              />
              <input
                type="text"
                placeholder="Country of interest*"
                required
                className={styleInput}
              />
              <input
                type="text"
                placeholder="Phone Number*"
                required
                className={styleInput}
              />
              <Select
                value={selectedOption}
                options={options}
                onChange={(option: SingleValue<OptionType>) =>
                  handleChangeOption(option)
                }
                styles={customStyle}
                id={"select-information"}
                instanceId={"select-information"}
              />

              <textarea
                name="message"
                id="message"
                placeholder="Message*"
                className={`${styleInput} mt-6`}
              />
              <div className="flex justify-center">
                <button className="btn  truncate  py-2 px-8 text-lg">
                  Send Your Message
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <div className="w-full px-8 lg:px-14">
              <h2 className="mb-10 text-5xl">Get In Touch!</h2>
              <p className="mb-6 font-normal tracking-wider  text-gray-600">
                In your search to find a bcccompany I am sure you have
                undoubtedly come across many different approaches. Finding a
                BCCCOMPANY that has the right process, tools, and experience to
                help you get unstuck and moving forward can be challenging. It
                is for this reason that I offer a Free Discovery Call. It is the
                best way I have found to help you evaluate me and my services.
              </p>
              <p className="mb-6 font-normal tracking-wider  text-gray-600">
                If you have any enquiries regarding our service, please feel
                free to contact us. Our expert team will get back to you
                soonest.
              </p>
              <div className="w-full border-[0.5px] border-gray-300 mb-6"></div>
              {information.map((item: InformationType, index: number) => (
                <div key={index} className="flex items-center mb-6">
                  <Image src={item.srcImage} alt="" height={48} width={48} />
                  <p className="ml-2 text-[17px]">{item.info}</p>
                </div>
              ))}
              <div className="w-full border-[0.5px] border-gray-300 mb-6"></div>

              <h3 className="mb-6 text-2xl">Business Working Hours</h3>
              <div className="flex items-center mb-4">
                <Image
                  src="assets/icons/clock-outline.svg"
                  alt=""
                  height={16}
                  width={16}
                />
                <p className="ml-2 text-[17px]">
                  Monday – Friday 9am to 5.30pm
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="assets/icons/clock-outline.svg"
                  alt=""
                  height={16}
                  width={16}
                />
                <p className="ml-2 text-[17px]">Saturday & Sunday-Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationContact;
