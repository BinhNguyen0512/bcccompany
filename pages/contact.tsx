import Banner from "@/components/Banner";
import InformationContact from "@/components/InformationContact";
import React from "react";

const links: any = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "",
    name: "Contact Us",
  },
];

const Contact = () => {
  return (
    <div>
      <Banner
        isBreadCrumb
        links={links}
        title={"Contact Us"}
        description={"Contact us if there is any contact."}
        srcImage={"/assets/banner-vn-contact_us.png"}
        bgColor={"bg-gradient-to-r from-[#c2f0f9] via-[#d8eaf4] to-[#e6e7f2]"}
        isShowImageMobile
      />
      <InformationContact />
    </div>
  );
};

export default Contact;
