import React from "react";

const Newsletter = () => {
  return (
    <section className="mb-10 lg:mb-20 px-4">
      <div className="container mx-auto">
        <div
          className="py-20 px-6 shadow-[0px_4px_16px_rgba(37,37,37,0.25)] rounded-[20px]
            bg-gradient-to-r
         from-[#90c5f1]
           via-[#90c5f1]
           to-[#ee8bab]
           background-animate
        "
        >
          <div className="mx-auto max-w-[880px]">
            <h2 className="mb-6 text-center text-white capitalize text-[30px] lg:text-[40px]">
              Get helpful tips and info from our newsletter!
            </h2>
            <p className="mx-auto mb-6 max-w-lg text-center text-white">
              Stay in the know and be empowered with our strategic how-tos,
              resources, and guidelines.
            </p>
            <div className="flex flex-col  items-center">
              <input
                type="text"
                placeholder="Email"
                className="mb-8 rounded-full bg-white p-4 lg:w-[450px]"
              />

              <button className="btn w-[170px] truncate font-semibold py-2 px-6 text-lg tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
