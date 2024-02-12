import React from "react";
import Image from "next/image";
import leaf from "@/public/images/leaf.png";
import { myStoryPage } from "@/types/myStoryPage";
import SwiperComponent from "../swiper";

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
              className="absolute w-full h-full flex flex-col justify-center md:pt-36 pt-[13%] 
              md:space-y-7 sm:space-y-3 space-y-5 max-w-[2440px] lg:px-[130px] md:px-[80px] sm:px-[40px] px-[20px]"
            >
              <h1
                className={`w-full flex text-white pb-[2%] ${
                  language === "en"
                    ? "sm:text-[30px] text-[25px] justify-start font-bold"
                    : "sm:text-[35px] text-[30px] justify-end arabic font-normal"
                }`}
              >
                {language === "en" ? "Technical skills" : "المهارات التقنية"}
              </h1>
              <div
                className="w-full h-fit flex sm:flex-row sm:justify-evenly sm:items-end 
              flex-col justify-center items-center md:space-y-0 space-y-7 lg:px-[12%] md:px-[0px] sm:px-[0px] px-[20px] md:pb-10"
              >
                <SwiperComponent
                  title="FrontEnd development"
                  content={content}
                  keyword="frontend"
                />
                <SwiperComponent
                  title="Data Analysis/Science"
                  content={content}
                  keyword="Data"
                />
                <SwiperComponent
                  title="Other"
                  content={content}
                  keyword="Other"
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
