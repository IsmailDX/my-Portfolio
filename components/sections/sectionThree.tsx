import React from "react";
import Image from "next/image";
import leaf from "@/public/images/leaf.png";
import { myStoryPage } from "@/types/myStoryPage";
import SwiperComponent from "../swiper";
import AnimatedContainer from "../shared/AnimatedContainer";

type Props = {
  colorImage: myStoryPage[];
  language: string;
  colorMode: string;
  content: myStoryPage[];
};

const SectionThree = ({ colorImage, language, colorMode, content }: Props) => {
  return (
    <section>
      <div className="w-full md:h-[100svh] sm:h-[75svh] h-[150svh] relative flex justify-center overflow-hidden">
        <Image
          src={leaf}
          alt="leaf"
          width={700}
          height={500}
          className="absolute 2xl:pt-[5%] pt-10 object-center 2xl:w-[45%] md:w-[60%] w-[90%] h-fit object-contain z-10 select-none"
        />
        {colorImage.map((item) => (
          <React.Fragment key={item._id}>
            {item.colorMode === `${colorMode}3` && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover md:bg-fixed bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            )}

            <div className="absolute w-full h-full bg-black/15" />

            <div
              className="absolute w-full h-full flex flex-col sm:justify-center justify-evenly md:pt-36 pt-[13%] 
              md:space-y-7 sm:space-y-3 max-w-[2440px] lg:px-[130px] md:px-[80px] sm:px-[40px] px-[20px]"
            >
              <AnimatedContainer
                initialClassName="opacity-0 -mx-36"
                transitionClassName="transition-all duration-[400ms] ease-out"
                whileInViewClassName="opacity-100 -mx-0"
                className={`w-full h-fit`}
                once
              >
                <h1
                  className={`w-full flex text-white pb-[2%] sm:pt-0 pt-[15%] ${
                    language === "en"
                      ? "sm:text-[30px] text-[25px] justify-start font-bold"
                      : "sm:text-[35px] text-[30px] justify-end arabic font-normal"
                  }`}
                >
                  {language === "en" ? "Technical skills" : "المهارات التقنية"}
                </h1>
              </AnimatedContainer>
              <div
                className="w-full sm:h-full h-full sm:max-h-[400px] flex sm:flex-row sm:justify-evenly lg:items-start 
              flex-col justify-evenly items-center md:space-y-0 lg:px-[12%] md:px-[0px] sm:px-[0px] px-[20px] md:pb-10"
              >
                <AnimatedContainer
                  initialClassName="opacity-0 my-36"
                  transitionClassName="transition-all duration-[600ms] delay-[300ms] ease-out"
                  whileInViewClassName="opacity-100 my-0"
                  className={`w-full h-fit`}
                  once
                >
                  <SwiperComponent
                    title="FrontEnd development"
                    content={content}
                    keyword="frontend"
                  />
                </AnimatedContainer>
                <AnimatedContainer
                  initialClassName="opacity-0 my-36"
                  transitionClassName="transition-all duration-[600ms] delay-[500ms] ease-in-out"
                  whileInViewClassName="opacity-100 my-0"
                  className={`w-full h-fit`}
                  once
                >
                  <SwiperComponent
                    title="Data Analysis/Science"
                    content={content}
                    keyword="Data"
                  />
                </AnimatedContainer>
                <AnimatedContainer
                  initialClassName="opacity-0 my-36"
                  transitionClassName="transition-all duration-[600ms] delay-[700ms] ease-in-out"
                  whileInViewClassName="opacity-100 my-0"
                  className={`w-full h-fit`}
                  once
                >
                  <SwiperComponent
                    title="Other"
                    content={content}
                    keyword="Other"
                  />
                </AnimatedContainer>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
