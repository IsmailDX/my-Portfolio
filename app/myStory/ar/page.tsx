import React from "react";
import Index from "@/components/sections/index";
import { getmyStoryPage } from "@/sanity/sanity-utils";
import SectionOne from "@/components/sections/sectionOne";
import Loading from "@/app/loading";
import { Suspense } from "react";

const MyStory = async () => {
  const homeItems = await getmyStoryPage();
  return (
    <div className="w-full h-full">
      <Index items={homeItems} />
      <Suspense fallback={<Loading />}>
        <SectionOne items={homeItems} />
      </Suspense>
    </div>
  );
};

export default MyStory;
