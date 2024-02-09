import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { education } from "@/types/education";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  language: string;
  colorMode: string;
  education: education[];
};

const SectionFive = ({ language, colorMode, education }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleThumbsSwiper = (swiper: any) => {
    setThumbsSwiper(swiper);
  };

  return (
    <section
      className={`${
        colorMode === "dark" ? "bg-parallax4" : "bg-[#fafafa]"
      } w-full h-full bg-cover bg-no-repeat md:bg-fixed bg-center flex justify-center overflow-hidden select-none`}
    >
      <div className="w-full max-w-[2440px] h-[77svh] lg:px-32 px-5 flex justify-between relative">
        <h1
          className={`lg:w-full lg:h-fit lg:opacity-100 opacity-0 w-0 h-0 lg:absolute lg:top-0 lg:pt-[3%] lg:z-20 ${
            colorMode === "dark" ? "text-white" : "text-black"
          } sm:pl-0 pl-1 ${
            language === "en"
              ? "sm:text-[30px] text-[25px] justify-start font-bold"
              : "sm:text-[35px] text-[30px] justify-end arabic font-normal"
          }`}
        >
          {language === "en" ? "Certificates" : "الشهادات"}
        </h1>
        <div>
          <Image
            src="/images/malenia1.png"
            width={700}
            height={700}
            alt="malenia"
            className="lg:w-[45%] lg:h-fit lg:opacity-100 w-0 h-0 opacity-0 absolute bottom-0 left-0 lg:-ml-[10%] ml-0 select-none z-10"
          />
        </div>
        <div className="overflow-hidden pt-[2%] w-fit h-full flex flex-col lg:items-end items-center justify-center gap-7">
          <h1
            className={`lg:w-0 lg:h-0 w-fit h-fit ${
              colorMode === "dark" ? "text-white" : "text-black"
            } ${
              language === "en"
                ? "sm:text-[30px] text-[25px] justify-start font-bold"
                : "sm:text-[35px] text-[30px] justify-end arabic font-normal"
            }`}
          >
            {language === "en" ? "Certificates" : "الشهادات"}
          </h1>
          <div className="lg:w-[50%] w-full overflow-hidden">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper3 h-full w-full"
              key="mainSwiper"
            >
              {education
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <>
                    {item.type === "certificate" && (
                      <SwiperSlide className="w-full h-fit" key={index}>
                        <Image
                          src={item.image}
                          width={700}
                          height={500}
                          className="w-full h-full object-contain"
                          alt="certificate"
                        />
                      </SwiperSlide>
                    )}
                  </>
                ))}
              <div
                className={`top-[45%] absolute z-50 button-next-slide right-0 duration-500 cursor-pointer select-none
               lg:bg-transparent ${
                 colorMode === "dark" ? "bg-black/30" : ""
               } rounded-full p-1`}
              >
                <IoIosArrowForward
                  className={`${
                    colorMode === "dark" ? "text-white" : "text-black"
                  } md:w-[60px] md:h-[60px] w-[40px] h-[40px]`}
                />
              </div>
              <div
                className={`top-[45%] absolute z-50 button-prev-slide left-0 duration-500 cursor-pointer select-none 
                lg:bg-transparent ${
                  colorMode === "dark" ? "bg-black/30" : ""
                } rounded-full p-1`}
              >
                <IoIosArrowBack
                  className={`${
                    colorMode === "dark" ? "text-white" : "text-black"
                  } md:w-[60px] md:h-[60px] w-[40px] h-[40px]`}
                />
              </div>
            </Swiper>
          </div>
          <div className="h-[20%] lg:w-[73%] w-full pb-1">
            <Swiper
              onSwiper={handleThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper4 h-full w-full rounded-md"
              key="thumbsSwiper"
            >
              {education.map((item, index) => (
                <>
                  {item.type === "certificate" && (
                    <SwiperSlide
                      className="w-full h-fit relative rounded-3xl"
                      key={index}
                    >
                      <div
                        className="w-full h-full bg-black/70 absolute top-0 left-0 flex justify-center 
                      items-center text-center text-white sm:text-lg text-sm select-none sm:rounded-3xl rounded-lg"
                      >
                        {item.name}
                      </div>
                      <Image
                        src={item.image}
                        width={700}
                        height={500}
                        className="w-full h-full object-cover object-center sm:rounded-3xl rounded-lg"
                        alt="certificate"
                      />
                    </SwiperSlide>
                  )}
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
