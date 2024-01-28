"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { myStoryPage } from "@/types/myStoryPage";

type Props = {
  items: myStoryPage[];
};

const Index = ({ items }: Props) => {
  const colorMode = useAppSelector((state) => state.color.value);

  return (
    <div className="w-full h-[75dvh] fixed bg-black">
      {items.map(
        (item) =>
          item.colorMode === colorMode && (
            <div
              key={item._id}
              className={`w-full h-full flex items-end ${
                colorMode === "dark" ? "justify-start" : "justify-center"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={490}
                height={490}
                className="absolute h-[88%] w-fit object-center object-cover"
              />

              <video
                src={item.video}
                autoPlay
                playsInline
                muted
                loop
                className={`w-full h-full object-center object-cover pointer-events-none`}
              />
            </div>
          )
      )}
    </div>
  );
};

export default Index;
