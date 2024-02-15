"use client";
import Image from "next/image";
import dark from "@/public/images/darkModeSolo.webp";
import light from "@/public/images/lightModeSolo.webp";
import initalBack from "@/public/images/initialBack.webp";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeColor } from "@/redux/features/colorMode/colorSlice";
import { useEffect, useState } from "react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import AllButtons from "@/components/buttons/AllButtons";
import Loading from "./loading";
import { changeLanguage } from "@/redux/features/language/languageSlice";

export default function Home() {
  const colorMode = useAppSelector((state) => state.color.value);
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.value);

  const [isDisabled, setIsDisabled] = useState(false);
  const [change, setChange] = useState(false);
  const [disappear, setDisappear] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

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

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    const totalImages = 2;
    let loadingTimeout;

    const checkIfAllImagesLoaded = () => {
      if (loadedImages === totalImages) {
        loadingTimeout = setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    checkIfAllImagesLoaded();

    loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, [loadedImages]);

  const languageSwitch = () => {
    dispatch(changeLanguage());
  };

  return (
    <main className="w-full h-[100dvh] flex justify-center items-center relative">
      {loading && <Loading />}
      <Image
        src={initalBack}
        width={1920}
        height={1080}
        alt="initalBack"
        className="w-full h-full absolute bottom-0 object-cover -z-10"
        onLoad={handleImageLoad}
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
            muted
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
            width={644}
            height={1039}
            alt="darkSolo"
            className="w-fit h-full absolute bottom-0 object-cover"
            onLoad={handleImageLoad}
            loading="eager"
            priority={true}
          />
        ) : (
          <Image
            src={light}
            width={650}
            height={1040}
            alt="lightSolo"
            className={`w-fit h-full absolute bottom-0 object-cover ${
              disappear
                ? "opacity-0 duration-[5s]"
                : "opacity-100 duration-[2s]"
            }`}
            loading="eager"
            priority={true}
          />
        )}
      </div>
      {
        <div
          className={`w-full h-full absolute flex justify-center 
          ${
            colorMode !== "dark"
              ? disappear
                ? "opacity-0 duration-[5s]"
                : `opacity-100 duration-[2s] ${
                    colorMode !== "dark" ? "delay-[2000ms]" : "delay-0"
                  }`
              : ""
          } 
          }`}
        >
          <AllButtons
            colorMode={colorMode}
            handleClickWithDelay={handleClickWithDelay}
            isDisabled={isDisabled}
            languageState={language}
            languageFun={languageSwitch}
          />
        </div>
      }
    </main>
  );
}
