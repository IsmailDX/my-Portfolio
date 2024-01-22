import React, { useState } from "react";

type ButtonProps = {
  title: string;
  handleClick?: () => void;
  state?: boolean;
};

const ButtonHome = ({ title, handleClick, state }: ButtonProps) => {
  return (
    <div
      className={`w-full bg-[#0f0e0c]/95 hover:bg-[#3f3b2f]/95 flex justify-center items-center py-2 px-2 border-2 
      border-[#6f6f63] shadow-[0_0px_3px_1px_rgba(111,111,99,1)]
       ${state ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleClick}
    >
      <p className="text-[#b5b5af] select-none text-center font-[Metropolis-Regular] text-base">
        {title}
      </p>
    </div>
  );
};

export default ButtonHome;
