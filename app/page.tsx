"use client";
import Image from "next/image";
import dark from "@/public/images/darkModeSolo.png";
import light from "@/public/images/lightModeSolo.png";
import initalBack from "@/public/images/initialBack.png";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeColor } from "@/redux/features/colorMode/colorSlice";
import { useEffect, useState } from "react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import AllButtons from "@/components/buttons/AllButtons";
import Loading from "@/components/shared/Loading";

export default function Home() {
  const colorMode = useAppSelector((state) => state.color.value);
  const dispatch = useAppDispatch();

  const [isDisabled, setIsDisabled] = useState(false);
  const [change, setChange] = useState(false);
  const [disappear, setDisappear] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Simulate loading time
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className="w-full h-[100dvh] flex justify-center items-center relative">
      {loading && <Loading />}
      <Image
        src={initalBack}
        alt="initalBack"
        className="w-full h-full absolute bottom-0 object-cover -z-10"
      />
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

      <AllButtons
        colorMode={colorMode}
        handleClickWithDelay={handleClickWithDelay}
        isDisabled={isDisabled}
      />
    </main>
  );
}
