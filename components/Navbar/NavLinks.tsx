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
  const [isHoverNavLink, setIsHoverNavLink] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [selectIndexNavLink, setSelectIndexNavLink] = useState<number>(0);
  const startHoverMenu = (index: number) => {
    setSelectIndex(index);
    toggleHover(true);
  };
  const endHoverMenu = (index: number) => {
    setSelectIndex(index);
    toggleHover(false);
  };

  const onMouseOver = (index: number) => {
    setSelectIndexNavLink(index);
    setIsHoverNavLink(true);
  };

  const onMouseOut = () => {
    setIsHoverNavLink(false);
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
              className="absolute top-10 hidden group-hover:block "
              initial="exit"
              animate={isHover && selectIndex === index ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="bg-white rounded-[10px] py-[30px] px-[20px] shadow-lg shadow-slate-400">
                {navLink.subLinks.map((sub: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex pt-4 group text-[#002a66] hover:text-primary"
                      onMouseOver={() => onMouseOver(index)}
                      onMouseOut={() => onMouseOut()}
                    >
                      <div className="mr-3">
                        <Image
                          src={sub.srcIcon}
                          alt=""
                          width={36}
                          height={36}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex items-center ">
                          <p
                            className={
                              "tracking-[0.25px] pt-1 pb-1 text-lg font-semibold uppercase  transition-all"
                            }
                          >
                            {sub.name}
                          </p>
                          <div
                            className={
                              isHoverNavLink && selectIndexNavLink === index
                                ? "block"
                                : "hidden"
                            }
                          >
                            <Image
                              src="/assets/icons/double-right.png"
                              alt=""
                              width={16}
                              height={16}
                              className="ml-4"
                            />
                          </div>
                        </div>
                        <p className=" text-sm font-light tracking-[0.25px] text-[#5c5c5c] hover:text-[#5c5c5c] ">
                          {sub.description}
                        </p>

                        <div className="w-full border-[0.5px] border-gray-200 mt-4  "></div>
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
