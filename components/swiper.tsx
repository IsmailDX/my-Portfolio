import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import card from "@/public/images/card.png";
import Image from "next/image";
import cardSmall from "@/public/images/cardsmall.png";
import { myStoryPage } from "@/types/myStoryPage";

type Props = {
  title: string;
  keyword: string;
  content: myStoryPage[];
};

const SwiperComponent = ({ title, keyword, content }: Props) => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="w-fit text-center font-normal text-white pb-3 md:text-[20px] text-[15px]">
        {title}
      </h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[190px] md:h-[297px] w-[190px] h-[207px]"
      >
        {content.map((item) => (
          <React.Fragment key={item._id}>
            {item.header === `${keyword}` && (
              <SwiperSlide
                key={item._id}
                className="bg-center bg-no-repeat flex justify-center items-center w-full h-full text-white select-none"
                style={{
                  backgroundImage: `url(${
                    windowSize >= 768 ? card.src : cardSmall.src
                  })`,
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
                  <div className="max-h-[130px] w-24 overflow-hidden flex justify-center">
                    <Image
                      src={item.image}
                      width={500}
                      height={700}
                      alt="logo"
                      className="object-contain object-center w-fit h-full"
                      loading="eager"
                    />
                  </div>
                  <h1 className="w-[125px] text-center">{item.name}</h1>
                </div>
              </SwiperSlide>
            )}
          </React.Fragment>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
