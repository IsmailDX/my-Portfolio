import Image from "next/image";
import React from "react";
import { experience } from "@/types/experience";
import { PortableText } from "@portabletext/react";

type Props = {
  experience: experience;
  colorMode: string;
};

const List = ({ experience, colorMode }: Props) => {
  return (
    <React.Fragment>
      <ul
        className={`sm:-space-y-2 overflow-hidden ${
          experience.language === "en" ? "" : "arabic text-right pr-5"
        }`}
      >
        <li
          className={`${
            colorMode === "dark" ? "text-white" : "text-black"
          } sm:text-[25px] text-[20px] font-bold flex justify-between items-center`}
        >
          <span>{experience.jobTitle}</span>
          <Image
            src={`/images/${experience.country}.png`}
            width={600}
            height={500}
            alt="flag"
            className="sm:w-[40px] w-[30px] h-fit mr-5"
          />
        </li>
        <li
          className={`${
            colorMode === "dark" ? "text-white" : "text-black"
          } text-sm pt-[7%] flex flex-col gap-2`}
        >
          <span
            className={`text-[12px] w-full border-b-[1px] pb-1 ${
              colorMode === "dark"
                ? "text-white/80 border-white/20"
                : "text-black border-black/20"
            }`}
          >
            {experience.language === "en" ? "Company" : "الشركة"}
          </span>
          {experience.company}
        </li>
        <li
          className={`${
            colorMode === "dark" ? "text-white" : "text-black"
          } text-sm pt-[5%] flex flex-col gap-2`}
        >
          <span
            className={`text-[12px] w-full border-b-[1px] pb-1 ${
              colorMode === "dark"
                ? "text-white/80 border-white/20"
                : "text-black border-black/20"
            }`}
          >
            {experience.language === "en"
              ? "Employment status"
              : "حالة التوظيف"}
          </span>
          {experience.employment_status}
        </li>
        <li
          className={`${
            colorMode === "dark" ? "text-white" : "text-black"
          } text-sm pt-[5%] flex flex-col gap-2`}
        >
          <span
            className={`text-[12px] w-full border-b-[1px] pb-1 ${
              colorMode === "dark"
                ? "text-white/80 border-white/20"
                : "text-black border-black/20"
            }`}
          >
            {experience.language === "en" ? "Employment period" : "فترة العمل"}
          </span>
          {experience.employment_period}
        </li>
        <li
          className={`${
            colorMode === "dark" ? "text-white" : "text-black"
          } text-sm pt-[5%] flex flex-col gap-2`}
        >
          <span
            className={`text-[12px] w-full border-b-[1px] pb-1 ${
              colorMode === "dark"
                ? "text-white/80 border-white/20"
                : "text-black border-black/20"
            }`}
          >
            {experience.language === "en" ? "Responsibilities" : "المسؤوليات"}
          </span>
          <ul
            className={`max-h-[140px] overflow-y-scroll text-[12px] space-y-2 scrollbar-thin  scrollbar-thumb-rounded-full ${
              colorMode === "dark"
                ? "scrollbar-thumb-white/30 scrollbar-track-white/10"
                : "scrollbar-thumb-black/30 scrollbar-track-black/5"
            }`}
          >
            <li
              className={`${
                experience.language === "en" ? "" : "text-right pr-3"
              }`}
            >
              <PortableText value={experience.responsibilities} />
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default List;