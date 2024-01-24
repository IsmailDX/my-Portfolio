import React from "react";
import Image from "next/image";
import AnimatedContainer from "./AnimatedContainer";

const Loading = () => {
  return (
    <AnimatedContainer
      initialClassName="opacity-100"
      transitionClassName="transition-all delay-[1700ms] duration-[5000ms]"
      whileInViewClassName="opacity-0"
      className={`w-full h-[100dvh] absolute z-30 select-none`}
    >
      <div className="w-screen h-[100dvh] bg-black flex sm:justify-end sm:items-end justify-center items-center">
        <Image
          src="/images/loadingIcon.jpg"
          alt="loadingIcon"
          className="object-contain p-10 animate-pulse"
          width={280}
          height={280}
        />
      </div>
    </AnimatedContainer>
  );
};

export default Loading;
