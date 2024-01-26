"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { myStoryPage } from "@/types/myStoryPage";

type Props = {
  items: myStoryPage[];
};

const Index = ({ items }: Props) => {
  const colorMode = useAppSelector((state) => state.color.value);

  return (
    <div className="w-full h-[75dvh] fixed">
      {items.map(
        (item) =>
          item.colorMode === colorMode && (
            <div
              key={item._id}
              className={`w-full h-full overflow-hidden flex items-end ${
                colorMode === "dark" ? "justify-start" : "justify-center"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={490}
                height={490}
                className="absolute xl:w-[35%]"
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
