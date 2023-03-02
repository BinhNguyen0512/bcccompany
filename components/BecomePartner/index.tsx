import Image from "next/image";
import React from "react";

const BecomePartner = () => {
  return (
    <section className="mb-[80px] py-10 px-[15px] relative lg:py-20">
      <div>
        <Image
          src={"/assets/required-documents.png"}
          alt=""
          height={737}
          width={1920}
          className="w-full absolute top-0 left-0 bottom-0 right-0  h-full z-[-1]"
        />
      </div>

      <div className="container mx-auto ">
        <h2 className="text-white lg:text-5xl text-center mb-10">
          How To Become Our Partner
        </h2>
        <p className="text-white font-semibold mb-5 text-center text-lg">
          If you intend to use our incorporation service for more than 5
          companies, then you are welcomed to join our programme.
        </p>
      </div>
    </section>
  );
};

export default BecomePartner;
