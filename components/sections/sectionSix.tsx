import React from "react";
import Image from "next/image";
import { projects } from "@/types/projects";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import AnimatedContainer from "../shared/AnimatedContainer";

type Props = {
  language: string;
  colorMode: string;
  projects: projects[];
};

const SectionSix = ({ language, colorMode, projects }: Props) => {
  return (
    <section
      className={`${
        colorMode === "dark" ? "bg-parallax2" : "bg-white"
      } w-full h-fit bg-cover bg-no-repeat md:bg-fixed bg-center flex justify-center overflow-hidden select-none`}
    >
      <div
        className={`w-full max-w-[2440px] h-full flex flex-col md:py-[3%] py-[6%] lg:px-32 md:px-24 px-5 space-y-[1%] ${
          language === "en" ? "items-start" : "items-end"
        }`}
      >
        <AnimatedContainer
          initialClassName="opacity-0 -mx-36"
          transitionClassName="transition-all duration-[400ms] ease-out"
          whileInViewClassName="opacity-100 -mx-0"
          className={`w-full h-fit`}
          once
        >
          <h1
            className={`w-fit h-fit ${
              colorMode === "dark" ? "text-white" : "text-black"
            } ${
              language === "en"
                ? "sm:text-[30px] text-[25px] font-bold"
                : "sm:text-[35px] text-[30px] arabic font-normal text-right w-full"
            }`}
          >
            {language === "en" ? "Projects" : "مشاريع"}
          </h1>
        </AnimatedContainer>
        <AnimatedContainer
          initialClassName="opacity-0 -mx-36"
          transitionClassName="transition-all duration-[400ms] delay-[200ms] ease-out"
          whileInViewClassName="opacity-100 -mx-0"
          className={`w-full h-fit flex ${
            language === "en"
              ? "justify-start items-start"
              : "justify-end items-end"
          }`}
          once
        >
          <p
            className={`${
              colorMode === "dark" ? "text-white" : "text-black"
            } text-[15px] ${
              language === "en"
                ? "text-[15px] font-bold lg:w-[40%] md:w-[60%] w-full"
                : "text-[15px] arabic font-normal text-right w-full"
            }`}
          >
            {language === "en"
              ? "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to the code respository and the live version of the project."
              : "تعرض المشاريع التالية مهاراتي وخبرتي من خلال أمثلة عملية من عملي. يتم وصف كل مشروع بإيجاز مع روابط إلى مستودع الكود والنسخة الحية من المشروع"}
          </p>
        </AnimatedContainer>
        <div
          className="w-full h-full grid grid-flow-col lg:grid-rows-2 lg:grid-cols-3 
        md:grid-cols-2 md:grid-rows-3 grid-rows-6 grid-cols-1 gap-5 pt-5"
        >
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <Link key={project._id} href={project.webLink} target="_blank">
                <AnimatedContainer
                  initialClassName="opacity-0 -mx-36"
                  transitionClassName="transition-all duration-[400ms] ease-in-out"
                  whileInViewClassName="opacity-100 -mx-0"
                  className={`w-full h-fit rounded-lg flex-col justify-center items-start relative overflow-hidden
                  pt-3 px-3 backdrop-filter backdrop-blur-sm ${
                    colorMode === "dark"
                      ? "bg-white/15"
                      : "border border-black/10 bg-white/90 shadow-lg"
                  } hover:scale-105 transition-all duration-200 ease-out cursor-pointer group`}
                  once
                >
                  <div className="w-full h-fit relative">
                    <div
                      className="w-full h-full bg-black/60 absolute top-0 left-0 rounded-2xl flex justify-center items-center 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    >
                      <h1 className="text-white font-bold text-xl">
                        Click to go to the website
                      </h1>
                    </div>
                    <Image
                      src={project.image}
                      width={600}
                      height={600}
                      alt="ProjectImage"
                      className="w-full h-full object-cover object-center rounded-2xl"
                      blurDataURL={project.blurURL}
                    />
                  </div>
                  <div className="w-full h-fit flex-col pt-[4%] pb-[5px]">
                    <h1
                      className={`whitespace-nowrap text-ellipsis overflow-hidden ${
                        colorMode === "dark" ? "text-white" : "text-black"
                      } font-bold text-xl`}
                    >
                      {project.projectTitle}
                    </h1>
                    <div
                      className={`${
                        colorMode === "dark" ? "text-white/70" : "text-black/70"
                      } text-[82%] w-full h-36 pt-[1%] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full ${
                        colorMode === "dark"
                          ? "scrollbar-thumb-white/30 scrollbar-track-white/10"
                          : "scrollbar-thumb-black/30 scrollbar-track-black/5"
                      }`}
                    >
                      <PortableText value={project.description} />
                    </div>
                    <div
                      className={`w-full h-fit flex gap-2 overflow-x-scroll scrollbar-thin
                     scrollbar-track-white/10 scrollbar-thumb-rounded-full pb-1 pt-3 ${
                       colorMode === "dark"
                         ? "scrollbar-thumb-white/30 scrollbar-track-white/10"
                         : "scrollbar-thumb-black/30 scrollbar-track-black/5"
                     }`}
                    >
                      {project.technologies.map((item) => (
                        <p
                          key={item.tech}
                          style={{ color: item.color, opacity: 0.7 }}
                        >
                          #{item.tech}
                        </p>
                      ))}
                    </div>
                  </div>
                </AnimatedContainer>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
