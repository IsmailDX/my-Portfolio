import React from "react";
import ButtonHome from "./ButtonHome";
import Link from "next/link";

type AllButtonsProps = {
  colorMode: string;
  handleClickWithDelay?: () => void;
  isDisabled: boolean;
  languageState?: string;
  languageFun?: () => void;
};

const AllButtons = ({
  colorMode,
  handleClickWithDelay,
  isDisabled,
  languageState,
  languageFun,
}: AllButtonsProps) => {
  return (
    <div className="absolute top-[50%] sm:w-[340px] w-[70%] h-fit flex flex-col justify-center items-center space-y-3">
      {languageState === "en" ? (
        <Link href="/myStory/en" className="w-full">
          <ButtonHome title="Start the journey" />
        </Link>
      ) : (
        <Link href="/myStory/ar" className="w-full">
          <ButtonHome title="ابدأ الرحلة" />
        </Link>
      )}
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
      {languageState === "en" ? (
        <ButtonHome title="عربي" handleClick={languageFun} />
      ) : (
        <ButtonHome title="English" handleClick={languageFun} />
      )}
    </div>
  );
};

export default AllButtons;
