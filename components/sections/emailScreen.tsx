import React from "react";
import Image from "next/image";
import AnimatedContainer from "../shared/AnimatedContainer";

type Props = {
  showEmail: string;
};

const EmailScreen = ({ showEmail }: Props) => {
  return (
    <>
      {showEmail === "no" ? null : (
        <AnimatedContainer
          initialClassName="opacity-0"
          transitionClassName="transition-all duration-[5000]"
          whileInViewClassName="opacity-100"
          className={`w-screen h-[100dvh] fixed z-50 select-none flex justify-center items-center`}
        >
          <Image
            src="/images/email-mess.webp"
            alt="Email"
            width={1920}
            height={1080}
            className="w-screen h-full object-cover"
          />
        </AnimatedContainer>
      )}
    </>
  );
};

export default EmailScreen;
