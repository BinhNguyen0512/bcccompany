import Image from "next/image";
import { useState } from "react";
import { dataNavLinks } from "../../data/dataNavLinks";
import { motion } from "framer-motion";

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.3,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const NavLinks = () => {
  const [isHover, toggleHover] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const startHoverMenu = (index: number) => {
    setSelectIndex(index);
    toggleHover(true);
  };
  const endHoverMenu = (index: number) => {
    setSelectIndex(index);
    toggleHover(false);
  };

  return (
    <>
      {dataNavLinks.map((navLink: any, index: number) => {
        return (
          <motion.li
            key={index}
            className="flex items-center lg:mr-4 xl:mr-10 group"
            onHoverStart={() => startHoverMenu(index)}
            onHoverEnd={() => endHoverMenu(index)}
          >
            <span className=" mr-2">{navLink.title}</span>
            <div>
              <Image
                src="assets/icons/chevron-down.svg"
                alt=""
                height={10}
                width={10}
              />
            </div>

            <motion.div
              className="absolute top-10 hidden group-hover:block"
              initial="exit"
              animate={isHover && selectIndex === index ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              {/* <div className="py-3"> 
                        <div className="w-4 h-4  left-3 absolute mt-1 rotate-45 bg-slate-500"></div>
                      </div> */}
              <div className="bg-white rounded-[10px] py-[30px] px-[10px] shadow-lg shadow-slate-400">
                {navLink.subLinks.map((sub: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex pt-4 group hover:text-primary"
                    >
                      <div className="mr-3">
                        <Image
                          src={sub.srcIcon}
                          alt=""
                          width={36}
                          height={36}
                        />
                      </div>
                      <div className="flex flex-col ">
                        <div className="flex items-center">
                          <h4
                            className={
                              "tracking-[0.25px] pt-1 pb-1 text-lg font-semibold uppercase text-[#002a66]"
                            }
                          >
                            {sub.name}
                          </h4>
                          {/* <div className={"hidden group-hover:block ml-2"}>
                            <Image
                              src="assets/icons/double-right-chevron.svg"
                              alt=""
                              width={16}
                              height={16}
                              className="text-sky-500"
                            />
                          </div> */}
                        </div>
                        <p className="text-sm tracking-[0.25px] ">
                          {sub.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.li>
        );
      })}
    </>
  );
};

export default NavLinks;
