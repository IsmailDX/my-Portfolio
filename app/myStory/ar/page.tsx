import React from "react";
import Index from "@/components/sections/index";
import {
  getmyMedia,
  getmyContent,
  getmyColorImage,
} from "@/sanity/sanity-utils";
import SectionOne from "@/components/sections/sectionOne";
import Loading from "@/app/loading";
import { Suspense } from "react";

const MyStory = async () => {
  const media = await getmyMedia();
  const content = await getmyContent();
  const colorImage = await getmyColorImage();
  return (
    <div className="w-full h-full">
      <title>Portfolio | قصتي</title>
      <Suspense fallback={<Loading />}>
        <Index items={media} />
        <SectionOne items={media} content={content} colorImage={colorImage} />
      </Suspense>
    </div>
  );
};

export default MyStory;
