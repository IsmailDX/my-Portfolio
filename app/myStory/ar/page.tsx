import React from "react";
import {
  getmyMedia,
  getmyContent,
  getmyColorImage,
  getmyEducation,
  getmyExperience,
} from "@/sanity/sanity-utils";
import AllSections from "@/components/sections/allSections";
import Loading from "@/app/loading";
import { Suspense } from "react";

const MyStory = async () => {
  const media = await getmyMedia();
  const content = await getmyContent();
  const colorImage = await getmyColorImage();
  const education = await getmyEducation();
  const experience = await getmyExperience();

  return (
    <div className="w-full h-[100svh]">
      <title>Portfolio | قصتي</title>
      <Suspense fallback={<Loading />}>
        <AllSections
          items={media}
          content={content}
          colorImage={colorImage}
          education={education}
          experience={experience}
        />
      </Suspense>
    </div>
  );
};

export default MyStory;
