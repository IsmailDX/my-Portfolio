import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import Image from "next/image";

type Props = {
  language: string;
  colorMode: string;
};

const SectionFour = ({ language, colorMode }: Props) => {
  return (
    <section
      className={`${
        colorMode === "dark" ? "bg-parallax2" : "bg-white"
      } w-full h-full bg-cover bg-no-repeat bg-fixed bg-center flex justify-center`}
    >
      <div className="w-full max-w-[2440px] lg:px-32 px-5 py-16 flex flex-col space-y-7">
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
            <SwiperSlide className="md:pl-10">
              <div className="w-full h-full flex flex-row sm:justify-end md:p-5 p-0 relative max-w-[500px] overflow-visible">
                <Image
                  src="/images/body1.png"
                  alt="body"
                  width={400}
                  height={700}
                  className="md:w-fit md:h-full md:opacity-100 h-0 w-0 opacity-0 object-contain absolute top-0 mr-[53%]"
                />

                <div className="md:w-[90%] w-full h-full rounded-[50px] bg-parallax3 bg-cover bg-no-repeat bg-fixed bg-center">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="md:pl-10">
              <div className="w-full h-full flex flex-row sm:justify-end md:p-5 p-0 relative max-w-[500px] overflow-visible">
                <Image
                  src="/images/body2.png"
                  alt="body"
                  width={400}
                  height={700}
                  className="md:w-fit md:h-full md:opacity-100 h-0 w-0 opacity-0 object-contain absolute top-0 mr-[53%]"
                />

                <div className="md:w-[90%] w-full h-full rounded-[50px] bg-parallax3 bg-cover bg-no-repeat bg-fixed bg-center"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="md:pl-10">
              <div className="w-full h-full flex flex-row sm:justify-end md:p-5 p-0 relative max-w-[500px] overflow-visible">
                <Image
                  src="/images/body3.png"
                  alt="body"
                  width={400}
                  height={700}
                  className="md:w-fit md:h-full md:opacity-100 h-0 w-0 opacity-0 object-contain absolute top-0 mr-[53%]"
                />

                <div className="md:w-[90%] w-full h-full rounded-[50px] bg-parallax3 bg-cover bg-no-repeat bg-fixed bg-center"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;