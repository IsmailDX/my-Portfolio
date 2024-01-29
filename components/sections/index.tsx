"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { myStoryPage } from "@/types/myStoryPage";

type Props = {
  items: myStoryPage[];
};

const Index = ({ items }: Props) => {
  const colorMode = useAppSelector((state) => state.color.value);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="w-full h-[100dvh] fixed bg-black overflow-hidden">
      <div className="w-full h-[75dvh] fixed">
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
                  className="absolute h-[88%] w-fit object-center object-cover z-10"
                />

                <Image
                  src={`/images/preload-index-${colorMode}.png`}
                  alt={item.name}
                  width={490}
                  height={490}
                  className={`${
                    videoLoaded === true ? "w-full" : "w-0"
                  } h-full object-center object-cover pointer-events-none`}
                />

                <video
                  src={item.video}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className={`w-full h-full object-center object-cover pointer-events-none z-0`}
                  preload="auto"
                  onLoad={handleVideoLoad}
                />
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Index;
