import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "swjv2bjr",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2024-01-25",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
