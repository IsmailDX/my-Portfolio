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
    <div className="w-full h-full">
      {items.map((item) => (
        <div key={item._id}>
          {item.colorMode === colorMode && (
            <video
              src={item.video}
              autoPlay
              playsInline
              muted
              className={`w-full h-full absolute top-0 left-0 object-center object-cover pointer-events-none`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Index;
