"use client";
import React from "react";
import { myStoryPage } from "@/types/myStoryPage";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import darkBack from "@/public/images/darkBack.png";

type Props = {
  items: myStoryPage[];
};

const SectionOne = ({ items }: Props) => {
  const colorMode = useAppSelector((state) => state.color.value);
  const language = useAppSelector((state) => state.language.value);
  return (
    <div className="w-full h-[100dvh] absolute top-[75%] left-0">
      {items.map(
        (item) =>
          item.language === language && (
            <div
              key={item._id}
              className={`w-full h-full flex justify-center relative${
                colorMode === "light" ? " bg-white" : ""
              }`}
            >
              {item.colorMode && colorMode === "dark" && (
                <Image src={darkBack} fill alt="darkBack" />
              )}

              <Image
                src={item.image}
                alt={item.name}
                width={720}
                height={720}
                className={`absolute top-0 xl:w-[55%] lg:w-[70%] w-[30%] -mt-[190px] object-contain ${
                  language === "ar" ? "w-[30%]" : ""
                }`}
              />
            </div>
          )
      )}
    </div>
  );
};
export default SectionOne;
