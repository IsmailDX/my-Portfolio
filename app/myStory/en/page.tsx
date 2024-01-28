import React from "react";
import Index from "@/components/sections/index";
import {
  getmyMedia,
  getmyContent,
  getmyColorImage,
} from "@/sanity/sanity-utils";
import AllSections from "@/components/sections/allSections";
import Loading from "@/app/loading";
import { Suspense } from "react";

const MyStory = async () => {
  const media = await getmyMedia();
  const content = await getmyContent();
  const colorImage = await getmyColorImage();
  return (
    <div className="w-full h-full">
      <title>Portfolio | My Story</title>
      <Suspense fallback={<Loading />}>
        <Index items={media} />
        <AllSections items={media} content={content} colorImage={colorImage} />
      </Suspense>
    </div>
  );
};

export default MyStory;
