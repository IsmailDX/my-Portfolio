import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "swjv2bjr",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2024-01-25",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
