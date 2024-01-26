import React from "react";
import Index from "@/components/sections/index";
import { getmyStoryPage } from "@/sanity/sanity-utils";
import SectionOne from "@/components/sections/sectionOne";

const MyStory = async () => {
  const homeItems = await getmyStoryPage();
  return (
    <div className="w-full h-full">
      <Index items={homeItems} />
      <SectionOne items={homeItems} />
    </div>
  );
};

export default MyStory;
