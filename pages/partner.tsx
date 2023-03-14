import Banner from "@/components/Banner";
import BecomePartner from "@/components/BecomePartner";
import MemberShip from "@/components/MemberShip";
import Needle from "@/components/Needle";
import Newsletter from "@/components/Newsletter";
import Programme from "@/components/Programme";
import React from "react";

const links: any = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "",
    name: "Become Our Partner",
  },
];

const Partner = () => {
  return (
    <div>
      <Banner
        isBreadCrumb
        links={links}
        title={"Partner With BBC"}
        description={
          "Our partner achieve 4x more conversions than the industry average because our platform makes it easy to scale, personalize, and optimize unique landing pages experiences for every ad campaign."
        }
        srcImage={"/assets/banner-partner.png"}
        bgColor={"bg-gradient-to-r from-[#b7d7f6] via-[#bfe5f9] to-[#c6f0fb]"}
        isShowImageMobile
      />
      <Programme />
      <Needle />
      <BecomePartner />
      <MemberShip />
      <Newsletter
        bgColor="bg-gradient-to-r from-[#af7eef] via-[#779deb] to-[#7bd6fc]"
        title={"Want To Find Out More About Our Partner Programme"}
        description={
          "Just leave us your email, and we will respond with more details"
        }
        titleButton={"Submit"}
      />
    </div>
  );
};

export default Partner;
