"use client";
import Image from "next/image";
import dark from "@/public/images/darkModeSolo.png";
import light from "@/public/images/lightModeSolo.png";
import ButtonHome from "@/components/buttons/ButtonHome";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeColor } from "@/redux/features/colorMode/colorSlice";
import { useState } from "react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

export default function Home() {
  const colorMode = useAppSelector((state) => state.color.value);
  const dispatch = useAppDispatch();

  const [isDisabled, setIsDisabled] = useState(false);
  const [change, setChange] = useState(false);
  const [disappear, setDisappear] = useState(false);

  const handleClickWithDelay = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      dispatch(changeColor());
      setChange(!change);

      setTimeout(() => {
        setDisappear(true);
      }, 1000);

      setTimeout(() => {
        setIsDisabled(false);
      }, 4000);

      setTimeout(() => {
        setDisappear(false);
      }, 5000);
    }
  };
  console.log("check this ", disappear);
  return (
    <main className="w-full h-[100dvh] flex justify-center items-center relative">
      {change && (
        <AnimatedContainer
          initialClassName="opacity-100"
          transitionClassName="transition-all duration-[25s] ease-in-out"
          whileInViewClassName="opacity-0"
          className=""
        >
          <video
            src="/videos/switchHome.mp4"
            autoPlay
            playsInline
            className={`w-full h-full absolute top-0 left-0 object-center object-cover pointer-events-none`}
          />
        </AnimatedContainer>
      )}
      {colorMode === "dark" ? (
        <video
          src="/videos/homeDark.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-center object-cover pointer-events-none"
        />
      ) : (
        <video
          src="/videos/homeLight.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-center object-cover pointer-events-none"
        />
      )}

      <div className="w-full h-full absolute bottom-0 flex justify-center select-none">
        {colorMode === "dark" ? (
          <Image
            src={dark}
            alt="darkSolo"
            className="w-fit h-full absolute bottom-0 object-cover"
          />
        ) : (
          <Image
            src={light}
            alt="lightSolo"
            className={`w-fit h-full absolute bottom-0 object-cover ${
              disappear
                ? "opacity-0 duration-[5s]"
                : "opacity-100 duration-[2s]"
            }`}
          />
        )}
      </div>

      <div className="absolute top-[50%] sm:w-[340px] w-[70%] h-fit flex flex-col justify-center items-center space-y-3">
        <ButtonHome title="Start the journey" />
        {colorMode === "dark" ? (
          <ButtonHome
            title="Light mode"
            handleClick={handleClickWithDelay}
            state={isDisabled}
          />
        ) : (
          <ButtonHome
            title="Dark mode"
            handleClick={handleClickWithDelay}
            state={isDisabled}
          />
        )}
        <ButtonHome title="عربي" />
      </div>
    </main>
  );
}
