"use client";
import React from "react";
import { myStoryPage } from "@/types/myStoryPage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import border from "@/public/images/border.png";
import AnimatedContainer from "../shared/AnimatedContainer";

type Props = {
  items: myStoryPage[];
  content: myStoryPage[];
  colorImage: myStoryPage[];
  language: string;
  colorMode: string;
  handleImageLoad: () => void;
};

const SectionOne = ({
  items,
  content,
  colorImage,
  language,
  colorMode,
  handleImageLoad,
}: Props) => {
  return (
    <section>
      {items.map(
        (item) =>
          item.language === language && (
            <div
              key={item._id}
              className={`w-full h-full flex justify-center relative bg-cover md:bg-fixed bg-center bg-no-repeat bg-white${
                colorMode === "dark" ? " bg-parallax" : ""
              }`}
            >
              <AnimatedContainer
                initialClassName="opacity-0 mx-36"
                transitionClassName="transition-all delay-[4700ms] duration-[600ms]"
                whileInViewClassName="opacity-100 mx-0"
                className={`absolute w-full h-fit flex-shrink object-contain z-10 select-none ${
                  language === "ar"
                    ? "md:w-[450px] sm:w-[400px] sm:pl-0 w-[300px] px-[12%]"
                    : "lg:w-[830px] md:w-[720px] sm:w-[600px] w-[500px]"
                }`}
                once
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={720}
                  height={720}
                  className={`absolute object-contain z-10 select-none ${
                    language === "ar"
                      ? "md:w-[450px] sm:w-[400px] w-[300px] sm:-top-56 -top-36"
                      : "lg:w-[830px] md:w-[720px] sm:w-[600px] w-[500px] lg:-top-48 md:-top-44 sm:-top-36 -top-24"
                  }`}
                  onLoad={handleImageLoad}
                  blurDataURL={item.blurURL}
                  priority
                />
              </AnimatedContainer>
              <div className="relative w-full h-full max-w-[2440px]">
                <AnimatedContainer
                  initialClassName="opacity-0"
                  transitionClassName="transition-all duration-[700ms]"
                  whileInViewClassName="opacity-100"
                  className={`w-full h-fit absolute sm:top-44 top-24 flex flex-col justify-center items-center text-center`}
                  once
                >
                  {item.language === "ar" ? (
                    <>
                      <h1
                        className={`sm:text-[45px] text-4xl ${colorMode} arabic pt-5`}
                      >
                        إسماعيل حسين
                      </h1>
                      <h2
                        className={`text-[#dab05e] sm:text-xl text-lg arabic`}
                      >
                        مبرمج تطبيقات
                      </h2>
                    </>
                  ) : (
                    <>
                      <h1
                        className={`sm:text-[45px] text-3xl ${colorMode} font-bold`}
                      >
                        Ismail Hussein
                      </h1>
                      <h2
                        className={`text-[#dab05e] font-[Mantinia-Regular] sm:text-xl text-lg uppercase`}
                      >
                        Software Developer
                      </h2>
                    </>
                  )}
                </AnimatedContainer>

                <div
                  className={`relative pt-52 sm:pb-20 pb-10 sm:top-[37%] top-[22%] lg:px-[90px] md:px-[80px] sm:px-[40px] px-[20px] 
                  w-full h-fit flex sm:flex-row flex-col sm:items-start ${
                    language === "en"
                      ? "items-start sm:pt-72 "
                      : "items-end sm:pt-80 pt-0"
                  } 
                  md:space-x-30 sm:space-x-10 space-y-10 overflow-hidden`}
                  key={item._id}
                >
                  {colorImage.map(
                    (item) =>
                      item.name === `section1BodyImage-${1}-${colorMode}` && (
                        <AnimatedContainer
                          initialClassName="sm:opacity-0 sm:-ml-48"
                          transitionClassName="sm:transition-all sm:duration-[600ms]"
                          whileInViewClassName="sm:opacity-100 sm:ml-0"
                          className={`h-fit ${
                            language === "en"
                              ? "opacity-0 w-0 h-0"
                              : "sm:opacity-100 sm:w-full sm:h-[500px] w-0 h-0"
                          }`}
                          once
                          key={item._id}
                        >
                          <div
                            className={`relative ${
                              language === "en"
                                ? "sm:opacity-0 opacity-100 sm:w-[0px] sm:h-[0px] w-0"
                                : "opacity-100 sm:w-full sm:h-[500px] w-0 h-0"
                            }`}
                            key={item._id}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={1000}
                              height={1000}
                              className="w-full h-full object-cover select-none"
                              blurDataURL={item.blurURL}
                            />
                            <Image
                              src={border}
                              alt="border1"
                              width={1000}
                              height={1000}
                              className="w-fit h-fit absolute lg:-top-4 -top-2 select-none"
                            />

                            <Image
                              src={border}
                              alt="border1"
                              width={1000}
                              height={1000}
                              className="w-fit h-fit absolute lg:-bottom-4 -bottom-2  -right-[35%] select-none"
                            />
                          </div>
                        </AnimatedContainer>
                      )
                  )}

                  {content.map(
                    (item) =>
                      item.name === `section1Body-${language}` && (
                        <AnimatedContainer
                          initialClassName="opacity-0 -ml-48"
                          transitionClassName="transition-all duration-[600ms] delay-[300ms]"
                          whileInViewClassName="opacity-100 ml-0"
                          className={`lg:w-[60%] w-fit h-fit`}
                          once
                          key={item._id}
                        >
                          <div
                            className={`flex flex-col w-fit h-full pt-5 space-y-6 ${
                              language === "en"
                                ? "items-start justify-start"
                                : "items-end arabic text-right"
                            }`}
                            key={item._id}
                          >
                            <h1
                              className={`${
                                language === "en"
                                  ? "text-[30px]"
                                  : "text-[35px]"
                              } w-fit font-bold ${
                                colorMode === "light"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            >
                              {item.header}
                            </h1>
                            <div
                              className={`${
                                language === "en"
                                  ? "text-[16px]"
                                  : "text-[20px]"
                              } max-w-[520px] ${
                                colorMode === "light"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            >
                              <PortableText value={item.content} />
                            </div>
                          </div>
                        </AnimatedContainer>
                      )
                  )}

                  {colorImage.map(
                    (item) =>
                      item.name === `section1BodyImage-${1}-${colorMode}` && (
                        <AnimatedContainer
                          initialClassName="opacity-0 -mr-48"
                          transitionClassName="transition-all duration-[600ms] delay-[400ms]"
                          whileInViewClassName="opacity-100 mr-0"
                          className={`w-full h-fit ${
                            language === "en"
                              ? "opacity-100 sm:w-full sm:h-[500px] w-full h-[150px]"
                              : "sm:opacity-0 opacity-100 sm:w-[0px] sm:h-[0px] w-full h-[150px]"
                          }`}
                          once
                          key={item._id}
                        >
                          <div
                            className={`relative ${
                              language === "en"
                                ? "opacity-100 sm:w-full sm:h-[500px] w-full h-[150px]"
                                : "sm:opacity-0 opacity-100 sm:w-[0px] sm:h-[0px] w-full h-[150px]"
                            }`}
                            key={item._id}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={1000}
                              height={1000}
                              className="w-full h-full object-cover select-none"
                              blurDataURL={item.blurURL}
                            />
                            <Image
                              src={border}
                              alt="border1"
                              width={1000}
                              height={1000}
                              className="w-fit h-fit absolute lg:-top-4 -top-2 select-none"
                            />

                            <Image
                              src={border}
                              alt="border1"
                              width={1000}
                              height={1000}
                              className="w-fit h-fit absolute lg:-bottom-4 -bottom-2  -right-[35%] select-none"
                            />
                          </div>
                        </AnimatedContainer>
                      )
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default SectionOne;
