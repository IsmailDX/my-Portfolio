import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-[100dvh] flex sm:justify-end sm:items-end justify-center items-center bg-black absolute z-30 select-none">
      <Image
        src="/images/loadingIcon.jpg"
        alt="loadingIcon"
        className="object-contain p-10 animate-pulse"
        width={280}
        height={280}
      />
    </div>
  );
};

export default Loading;
