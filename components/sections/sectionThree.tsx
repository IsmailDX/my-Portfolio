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
  console.log("testing1", colorImage);
  return (
    <section>
      <div className="w-full md:h-[100svh] sm:h-[75svh] h-[150svh] relative flex justify-center overflow-hidden">
        <Image
          src={leaf}
          alt="leaf"
          width={700}
          height={500}
          className="absolute pt-10 object-center md:w-[60%] w-[90%] h-fit object-contain z-10"
        />
        {colorImage.map((item) => (
          <React.Fragment key={item._id}>
            {item.colorMode === `${colorMode}3` && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            )}

            <div className="absolute w-full h-full bg-black/15" />

            <div
              className="absolute w-full h-full lg:px-[130px] md:px-[50px] sm:px-[20px] px-[20px] 
              flex flex-col justify-center md:pt-36 pt-24 md:space-y-7 sm:space-y-3 space-y-5"
            >
              <h1
                className={`w-full flex text-white ${
                  language === "en"
                    ? "sm:text-[30px] text-[25px] justify-start font-bold"
                    : "sm:text-[35px] text-[30px] justify-end arabic font-normal"
                }`}
              >
                {language === "en" ? "Technical skills" : "المهارات التقنية"}
              </h1>
              <div
                className="w-full h-fit flex sm:flex-row sm:justify-evenly sm:items-end 
              flex-col justify-center items-center md:space-y-0 space-y-7"
              >
                <SwiperComponent
                  title="FrontEnd development"
                  language={language}
                  content={content}
                  keyword="frontend"
                />
                <SwiperComponent
                  title="Data Analysis/Science"
                  language={language}
                  content={content}
                  keyword="Data"
                />
                <SwiperComponent
                  title="Other"
                  language={language}
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
