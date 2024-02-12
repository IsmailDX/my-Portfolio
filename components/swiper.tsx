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
  language: string;
  keyword: string;
  content: myStoryPage[];
};

const SwiperComponent = ({ title, language, keyword, content }: Props) => {
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

  const keywordData = {
    frontend: [
      { title: "React", image: "/images/logos/React.png" },
      { title: "Bootstrap", image: "/images/logos/Bootstrap.png" },
      { title: "Chukra UI", image: "/images/logos/Chukra-UI.png" },
      // Add more frontend frameworks as needed
    ],
    Data: [
      { title: "Python", image: "/images/logos/Python.png" },
      {
        title: "Machine learning",
        image: "/images/logos/Machine-learning.png",
      },
      { title: "Tableau", image: "/images/logos/Tableau.png" },
      // Add more data-related technologies as needed
    ],
    Other: [
      { title: "React Native", image: "/images/logos/React-Native.png" },
      { title: "Flutter", image: "/images/logos/Flutter.png" },
      { title: "C++", image: "/images/logos/C++.png" },
      // Add more miscellaneous technologies as needed
    ],
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="w-fit text-center font-normal text-white pb-3 md:text-[20px] text-[15px]">
        {title}
      </h1>
      <Swiper
        key={title}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="flex flex-col justify-center items-center md:w-[190px] md:h-[297px] w-[190px] h-[207px]"
      >
        {keywordData[keyword].map((item, index) => (
          <SwiperSlide
            key={index} // Use index as key since item._id is not available
            className="bg-center bg-no-repeat w-full h-full text-white select-none"
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
              <h1 className="w-[125px] text-center">{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
