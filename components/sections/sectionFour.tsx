import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import Image from "next/image";
import border from "@/public/images/border.png";
import List from "../list";
import { experience } from "@/types/experience";
import AnimatedContainer from "../shared/AnimatedContainer";

type Props = {
  language: string;
  colorMode: string;
  experience: experience[];
};

const SectionFour = ({ language, colorMode, experience }: Props) => {
  return (
    <section
      className={`${
        colorMode === "dark" ? "bg-parallax2" : "bg-white"
      } w-full h-fit bg-cover bg-no-repeat md:bg-fixed bg-center flex justify-center overflow-visible relative`}
    >
      <Image
        src={border}
        alt="border"
        width={1500}
        height={500}
        className="absolute top-0 left-0 w-full h-fit object-contain z-10 -mt-[2%] select-none"
      />
      <div className="w-full max-w-[2440px] lg:px-32 px-5 py-16 flex flex-col space-y-7 overflow-hidden">
        <AnimatedContainer
          initialClassName="opacity-0 -mx-36"
          transitionClassName="transition-all duration-[400ms] ease-out"
          whileInViewClassName="opacity-100 -mx-0"
          className={`w-full h-fit`}
          once
        >
          <h1
            className={`w-full flex ${
              colorMode === "dark" ? "text-white" : "text-black"
            } sm:pl-0 pl-1 ${
              language === "en"
                ? "sm:text-[30px] text-[25px] justify-start font-bold"
                : "sm:text-[35px] text-[30px] justify-end arabic font-normal"
            }`}
          >
            {language === "en" ? "Experience" : "الخبرة"}
          </h1>
        </AnimatedContainer>
        <div className="w-full h-full">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            slidesPerView={1.1}
            spaceBetween={20}
            freeMode={true}
            modules={[Scrollbar, FreeMode]}
            breakpoints={{
              680: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1151: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="w-full h-[500px]"
          >
            {experience
              .sort((a, b) => a.order - b.order)
              .map((exp, index) => (
                <>
                  {language === exp.language && (
                    <SwiperSlide className="md:pl-10 select-none" key={exp._id}>
                      <AnimatedContainer
                        initialClassName="opacity-0 -mx-36"
                        transitionClassName={`transition-all duration-[500ms] delay-[${
                          index + 1
                        }00ms] ease-in-out`}
                        whileInViewClassName="opacity-100 -mx-0"
                        className={`w-full h-full`}
                        once
                      >
                        <div className="w-full h-full flex flex-row sm:justify-end md:p-5 p-0 relative max-w-[500px] overflow-visible">
                          <Image
                            src={`/images/body${exp.order + 1}.png`}
                            alt="body"
                            width={400}
                            height={700}
                            className="md:w-fit md:h-full md:opacity-100 h-0 w-0 opacity-0 object-contain absolute top-0 mr-[53%] select-none"
                          />

                          <div
                            className={`md:w-[90%] w-full h-full rounded-[30px] bg-cover bg-no-repeat bg-fixed bg-center lg:pl-[20%]
                       lg:px-0 px-[10%] pt-[7%] pr-2 ${
                         colorMode === "light"
                           ? "border border-black/10 bg-[#fafafa] shadow-lg"
                           : "bg-parallax3"
                       }`}
                          >
                            <List experience={exp} colorMode={colorMode} />
                          </div>
                        </div>
                      </AnimatedContainer>
                    </SwiperSlide>
                  )}
                </>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
