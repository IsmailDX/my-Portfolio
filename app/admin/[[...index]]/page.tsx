"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import React from "react";

const Adminpage = () => {
  return <NextStudio config={config} />;
};

export default Adminpage;
