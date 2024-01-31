"use client";
import React, { useEffect, useState } from "react";
import { myStoryPage } from "@/types/myStoryPage";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/app/loading";
import SectionTwo from "./sectionTwo";
import SectionOne from "./sectionOne";
import { education } from "@/types/education";

type Props = {
  items: myStoryPage[];
  content: myStoryPage[];
  colorImage: myStoryPage[];
  education: education[];
};

const AllSections = ({ items, content, colorImage, education }: Props) => {
  const colorMode = useAppSelector((state) => state.color.value);
  const language = useAppSelector((state) => state.language.value);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

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

  return (
    <section>
      <div
        className={`relative ${
          loading === true ? "overflow-hidden" : ""
        } w-full h-[100dvh]`}
      >
        {loading && <Loading />}

        <div className="w-full h-fit absolute top-[75%] left-0 bg-[#142020]">
          <SectionOne
            items={items}
            content={content}
            colorImage={colorImage}
            language={language}
            colorMode={colorMode}
            handleImageLoad={handleImageLoad}
          />
          <SectionTwo
            content={content}
            colorImage={colorImage}
            language={language}
            colorMode={colorMode}
            education={education}
          />
        </div>
      </div>
    </section>
  );
};
export default AllSections;
