import React from "react";
import Index from "@/components/sections/index";
import {
  getmyMedia,
  getmyContent,
  getmyColorImage,
  getmyEducation,
} from "@/sanity/sanity-utils";
import AllSections from "@/components/sections/allSections";
import Loading from "@/app/loading";
import { Suspense } from "react";

const MyStory = async () => {
  const media = await getmyMedia();
  const content = await getmyContent();
  const colorImage = await getmyColorImage();
  const education = await getmyEducation();

  return (
    <div className="w-full h-[100dvh]">
      <title>Portfolio | My Story</title>
      <Suspense fallback={<Loading />}>
        <Index items={media} />
        <AllSections
          items={media}
          content={content}
          colorImage={colorImage}
          education={education}
        />
      </Suspense>
    </div>
  );
};

export default MyStory;
