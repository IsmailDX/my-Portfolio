import Link from "next/link";
import React from "react";
import useSound from "use-sound";

type ButtonProps = {
  title: string;
  handleClick?: () => void;
  state?: boolean;
  language?: string;
};

const ButtonHome = ({ title, handleClick, state }: ButtonProps) => {
  const [playSound] = useSound("/audio/buttonClick.mp3", { volume: 0.3 });
  const [playSound2] = useSound("/audio/buttonHover.mp3", { volume: 0.3 });

  return (
    <div
      className={`w-full bg-[#0f0e0c]/95 hover:bg-[#3f3b2f]/95 flex justify-center items-center py-2 px-2 border-2 
      border-[#6f6f63] shadow-[0_0px_3px_1px_rgba(111,111,99,1)]
       ${state ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={() => {
        handleClick && handleClick();
        playSound();
      }}
      onMouseEnter={playSound2}
    >
      <p className="text-[#b5b5af] select-none text-center font-[Mantinia-Regular] text-sm uppercase">
        {title}
      </p>
    </div>
  );
};

export default ButtonHome;
