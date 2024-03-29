"use client";
import React, { useEffect, useState } from "react";
import { myStoryPage } from "@/types/myStoryPage";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/app/loading";
import SectionTwo from "./sectionTwo";
import SectionOne from "./sectionOne";
import { education } from "@/types/education";
import SectionThree from "./sectionThree";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Index from "@/components/sections/index";
import SectionFour from "./sectionFour";
import { experience } from "@/types/experience";
import { projects } from "@/types/projects";
import SectionFive from "./sectionFive";
import SectionSix from "./sectionSix";
import SectionSeven from "./sectionSeven";
import EmailScreen from "./emailScreen";
import { useDispatch } from "react-redux";
import { showEmailScreen } from "@/redux/features/email/emailSlice";
import { Howl } from "howler";
import Footer from "./footer";

type Props = {
  items: myStoryPage[];
  content: myStoryPage[];
  colorImage: myStoryPage[];
  education: education[];
  experience: experience[];
  projects: projects[];
};

const AllSections = ({
  items,
  content,
  colorImage,
  education,
  experience,
  projects,
}: Props) => {
  const colorMode = useAppSelector((state) => state.color.value);
  const language = useAppSelector((state) => state.language.value);
  const showEmail = useAppSelector((state) => state.email.value);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const dispatch = useDispatch();

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    const totalImages = 1;
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

  var sound = new Howl({
    src: ["/audio/emailSent.mp3"],
    volume: 0.2,
  });

  const handleEmailSent = () => {
    sound.play();
    dispatch(showEmailScreen());
    setTimeout(() => {
      dispatch(showEmailScreen());
    }, 5000);
  };

  return (
    <section>
      <EmailScreen showEmail={showEmail} />
      <div
        className={`relative ${
          loading === true ? "overflow-hidden" : ""
        } w-full h-[100svh]`}
      >
        <Link href="/">
          <div
            className="w-fit h-fit md:bg-transparent hover:md:bg-transparent bg-black/50 hover:bg-black/90
                         text-white/85 hover:text-white/100 absolute top-5 left-5 py-4 pr-4 pl-2 flex justify-center 
                         items-center cursor-pointer group rounded-3xl transition-all duration-200 ease-out z-20"
          >
            <IoIosArrowBack className="w-7 h-7 group-hover:w-8 group-hover:h-7 transition-all duration-100" />
            {language === "en" ? (
              <h1 className="font-bold group-hover:text-lg select-none">
                Go Back
              </h1>
            ) : (
              <h1 className="font-bold group-hover:text-lg arabic select-none">
                ارجع
              </h1>
            )}
          </div>
        </Link>

        {loading && <Loading />}

        <Index items={items} />

        <div className="w-full h-fit absolute top-[75%] left-0 bg-[#0c141c]">
          <SectionOne
            items={items}
            content={content}
            colorImage={colorImage}
            language={language}
            colorMode={colorMode}
            handleImageLoad={handleImageLoad}
          />
          <SectionTwo
            colorImage={colorImage}
            language={language}
            colorMode={colorMode}
            education={education}
          />
          <SectionThree
            colorImage={colorImage}
            language={language}
            colorMode={colorMode}
            content={content}
          />
          <SectionFour
            language={language}
            colorMode={colorMode}
            experience={experience}
          />
          <SectionFive
            language={language}
            colorMode={colorMode}
            education={education}
          />
          <SectionSix
            language={language}
            colorMode={colorMode}
            projects={projects}
          />
          <SectionSeven
            language={language}
            colorMode={colorMode}
            emailSent={handleEmailSent}
          />
          <Footer colorMode={colorMode} language={language} />
        </div>
      </div>
    </section>
  );
};
export default AllSections;
