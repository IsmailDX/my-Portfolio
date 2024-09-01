import React from "react";
import {
  getmyMedia,
  getmyContent,
  getmyColorImage,
  getmyEducation,
  getmyExperience,
  getMyProjects,
} from "@/sanity/sanity-utils";
import AllSections from "@/components/sections/allSections";
import Loading from "@/app/loading";
import { Suspense } from "react";

//to refresh data to get fresh data from sanity
export const revalidate = 30;

const MyStory = async () => {
  const media = await getmyMedia();
  const content = await getmyContent();
  const colorImage = await getmyColorImage();
  const education = await getmyEducation();
  const experience = await getmyExperience();
  const projects = await getMyProjects();

  return (
    <div className="w-full h-[100svh]">
      <title>قصت اسماعيل</title>
      <Suspense fallback={<Loading />}>
        <AllSections
          items={media}
          content={content}
          colorImage={colorImage}
          education={education}
          experience={experience}
          projects={projects}
        />
      </Suspense>
    </div>
  );
};

export default MyStory;
