import Image from "next/image";
import React from "react";
import { experience } from "@/types/experience";
import { PortableText } from "@portabletext/react";
import AnimatedContainer from "./shared/AnimatedContainer";

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
        <AnimatedContainer
          initialClassName="opacity-0 -ml-20"
          transitionClassName="transition-all duration-[600ms] delay-[220ms] ease-in-out"
          whileInViewClassName="opacity-100 -ml-0"
          className={`w-full h-fit overflow-hidden`}
          once
        >
          <li
            className={`${
              colorMode === "dark" ? "text-white" : "text-black"
            } sm:text-[25px] text-[20px] font-bold flex justify-between items-center`}
          >
            <span>{experience.jobTitle}</span>
            <Image
              src={`/images/${experience.country}.webp`}
              width={600}
              height={500}
              alt="flag"
              className="sm:w-[40px] w-[30px] h-fit mr-5"
            />
          </li>
        </AnimatedContainer>
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
          <AnimatedContainer
            initialClassName="opacity-0 -ml-36"
            transitionClassName="transition-all duration-[600ms] delay-[320ms] ease-in-out"
            whileInViewClassName="opacity-100 -ml-0"
            className={`w-full h-fit overflow-hidden`}
            once
          >
            {experience.company}
          </AnimatedContainer>
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
          <AnimatedContainer
            initialClassName="opacity-0 -ml-36"
            transitionClassName="transition-all duration-[600ms] delay-[520ms] ease-in-out"
            whileInViewClassName="opacity-100 -ml-0"
            className={`w-full h-fit overflow-hidden`}
            once
          >
            {experience.employment_status}
          </AnimatedContainer>
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
          <AnimatedContainer
            initialClassName="opacity-0 -ml-36"
            transitionClassName="transition-all duration-[600ms] delay-[720ms] ease-in-out"
            whileInViewClassName="opacity-100 -ml-0"
            className={`w-full h-fit overflow-hidden`}
            once
          >
            {experience.employment_period}
          </AnimatedContainer>
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
            <AnimatedContainer
              initialClassName="opacity-0 -ml-36"
              transitionClassName="transition-all duration-[600ms] delay-[920ms] ease-in-out"
              whileInViewClassName="opacity-100 -ml-0"
              className={`w-full h-fit overflow-hidden`}
              once
            >
              {experience.language === "en" ? "Responsibilities" : "المسؤوليات"}
            </AnimatedContainer>
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
              <AnimatedContainer
                initialClassName="opacity-0 -ml-64"
                transitionClassName="transition-all duration-[600ms] delay-[1120ms] ease-in-out"
                whileInViewClassName="opacity-100 -ml-0"
                className={`w-full h-fit overflow-hidden`}
                once
              >
                <PortableText value={experience.responsibilities} />
              </AnimatedContainer>
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default List;
