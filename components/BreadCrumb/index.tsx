import { LinkType } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  links?: LinkType[];
}

const BreadCrumb = (props: Props) => {
  const { links } = props;
  return (
    <div className="lg:mb-8  mb-6">
      <div className="flex flex-row justify-center lg:justify-start items-center">
        {links?.map((link: LinkType, index: number) => (
          <div key={index} className="flex items-center">
            <Link
              href={link.to}
              className={
                link.to
                  ? "text-sm font-medium capitalize hover:text-primary lg:text-xl"
                  : "text-sm font-medium capitalize lg:text-xl cursor-default"
              }
            >
              {link.name}
            </Link>

            {links.length - 1 !== index && (
              <Image
                src="assets/icons/arrow-right.svg"
                alt=""
                width={16}
                height={16}
                className="mx-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
