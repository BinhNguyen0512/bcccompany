import { useState } from "react";
import { TabsTierDesktop } from "./TabsTierDesktop";
import { TabsTierMobile } from "./TabsTierMobile";

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
        <TabsTierDesktop
          setSelectIndexTab={setSelectIndexTab}
          selectIndexTab={selectIndexTab}
        />

        <TabsTierMobile
          setSelectIndexTab={setSelectIndexTab}
          selectIndexTab={selectIndexTab}
        />

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
