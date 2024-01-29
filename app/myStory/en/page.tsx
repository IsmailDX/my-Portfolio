import React from "react";

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
    <div className="w-full h-[100dvh]">
      <title>Portfolio | My Story</title>
      <Suspense fallback={<Loading />}>
        <AllSections
          items={media}
          content={content}
          colorImage={colorImage}
          media={media}
        />
      </Suspense>
    </div>
  );
};

export default MyStory;
