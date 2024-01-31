import React from "react";
import { myStoryPage } from "@/types/myStoryPage";
import { education } from "@/types/education";

type Props = {
  colorImage: myStoryPage[];
  language: string;
  colorMode: string;
  education: education[];
};

const SectionTwo = ({ colorImage, language, colorMode, education }: Props) => {
  return (
    <section>
      <div className="relative w-full h-full overflow-hidden">
        {colorImage.map((item) => (
          <React.Fragment key={item._id}>
            {item.name === `section2BackImage-1-${colorMode}` && (
              <div
                className="absolute w-full h-full bg-cover bg-fixed bg-center bg-no-repeat bg-white z-10"
                style={{
                  backgroundImage:
                    item.colorMode === colorMode
                      ? `url(${item.image})`
                      : `url(${item.image})`,
                }}
              />
            )}
          </React.Fragment>
        ))}

        <div
          className="w-full h-full top-0 left-0 lg:px-[130px] md:px-[80px] sm:px-[40px] px-[20px] 
        flex flex-col py-14 relative z-10 space-y-10"
        >
          <h1
            className={`w-full flex font-bold text-white ${
              language === "en"
                ? "text-[30px] justify-start"
                : "text-[35px] justify-end arabic"
            }`}
          >
            {language === "en" ? "Education" : "التعليم"}
          </h1>
          <div className="flex lg:flex-row flex-col gap-6">
            {education.map((item) => (
              <React.Fragment key={item._id}>
                {item.language === language && (
                  <div
                    className={`w-full lg:h-[210px] h-[190px] py-6 sm:px-10 px-5 flex flex-col ${
                      item.language === "en"
                        ? "items-start text-left"
                        : "items-end text-right arabic"
                    } justify-center rounded-lg relative 
                      overflow-hidden border-[3px] border-white/20 hover:border-white/70 hover:scale-105 transition-all duration-300`}
                    key={item._id}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 blur-[2px]"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    />
                    <div
                      className={`absolute inset-0 w-full h-full ${
                        colorMode === "dark" ? "bg-[#041414]/50" : "bg-black/30"
                      } z-0`}
                    />

                    <div className="z-10 text-white">
                      <h1 className="sm:text-2xl text-lg font-bold">
                        {item.name}
                      </h1>
                      <h2 className="sm:text-xl text-base">
                        {item.schoolName}
                      </h2>
                      <h3 className="sm:text-lg text-sm">
                        {item.graduateDate}
                      </h3>
                      <h4 className="sm:text-base text-sm">
                        {item.graduateLocation}
                      </h4>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
