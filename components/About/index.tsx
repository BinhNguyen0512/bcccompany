import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { dataAbout } from "@/data/dataAbout";
import { AboutType } from "@/types/home";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="mb:0 lg:mb-[80px] relative py-10 lg:py-20" ref={ref}>
      <div>
        <Image
          src={"/assets/pexels-gradient-1920x520.png"}
          alt=""
          height={0}
          width={0}
          className="w-full absolute top-0 left-0 bottom-0 right-0  h-full z-[-1]"
        />
      </div>
      <div className="container mx-auto px-[15px]">
        <div className="h-full py-15  text-white">
          <h2 className="text-white mb-6 lg:mb:10">Get To Know Us</h2>
          <div className="grid  lg:grid-cols-12 lg:gap-5 py-5 lg:py-8">
            <div className="lg:col-span-7 text-white tracking-wider font-light">
              <div className="flex h-full flex-col items-center justify-center text-base lg:text-xl">
                <p className="mb-4 ">
                  <span className="text-[#03f4ff]">BBCCOMPANY Limited </span>
                  Built on the belief that marketers don’t have to settle for
                  the status quo, founder Tyson Quick and our senior leadership
                  team champion an inclusive and innovative culture that
                  embraces accountability, encourages employees to think big,
                  and strives to consistently make a positive impact for our
                  customers, partners, and each other.
                </p>
                <p>
                  We know how hard it is for businesses to change in a
                  fast-moving world, that&#39;s why we make it our vision from
                  day one to deliver services that scale with time. With our
                  proven IT infrastructure and commitment to being a
                  digital-first service provider, we can get your company set up
                  and managed properly in over +18 countries at minimum costs
                  and in a reliable manner.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2">
                {dataAbout.map((data: AboutType, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-4 ${
                        index % 2 === 0 && "relative"
                      }`}
                    >
                      <div className="absolute top-6 right-0 h-[70%] border-r-[1px]"></div>
                      <p className="text-3xl lg:text-4xl text-[#03f4ff] mb-4 lg:mb-5 font-bold">
                        <CountUp
                          start={0}
                          end={data.number}
                          duration={data.duration}
                        />
                        {`% `}
                        <span className="text-white">+</span>
                      </p>
                      <p className="text-[16px] lg:text-lg">{data.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
