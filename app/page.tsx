"use client";
import Image from "next/image";
import dark from "@/public/images/darkModeSolo.png";
import light from "@/public/images/lightModeSolo.png";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeColor } from "@/redux/features/colorMode/colorSlice";
import { useEffect, useState } from "react";
import AllButtons from "@/components/buttons/AllButtons";
import Loading from "./loading";
import { changeLanguage } from "@/redux/features/language/languageSlice";

export default function Home() {
  const colorMode = useAppSelector((state) => state.color.value);
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.value);
  const [loading, setLoading] = useState(true);

  const handleClickWithDelay = () => {
    dispatch(changeColor());
  };

  useEffect(() => {
    let loadingTimeout;
    loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const languageSwitch = () => {
    dispatch(changeLanguage());
  };

  return (
    <main className="w-full h-[100dvh] flex justify-center items-center relative">
      {loading && <Loading />}
      <div className="w-full h-full bg-black absolute -z-50" />
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
            loading="eager"
          />
        ) : (
          <Image
            src={light}
            width={644}
            height={1039}
            alt="lightSolo"
            className={`w-fit h-full absolute bottom-0 object-cover `}
            loading="eager"
          />
        )}
      </div>
      {
        <div className="w-full h-full absolute flex justify-center">
          <AllButtons
            colorMode={colorMode}
            handleClickWithDelay={handleClickWithDelay}
            languageState={language}
            languageFun={languageSwitch}
          />
        </div>
      }
    </main>
  );
}
