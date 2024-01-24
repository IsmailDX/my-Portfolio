import React from "react";
import ButtonHome from "./ButtonHome";

type AllButtonsProps = {
  colorMode: string;
  handleClickWithDelay: () => void;
  isDisabled: boolean;
};

const AllButtons = ({
  colorMode,
  handleClickWithDelay,
  isDisabled,
}: AllButtonsProps) => {
  return (
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
  );
};

export default AllButtons;
