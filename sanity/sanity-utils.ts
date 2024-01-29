import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { myStoryPage } from "@/types/myStoryPage";

// export async function getProjects(): Promise<Project[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project"]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`
//   );
// }

export async function getmyMedia(): Promise<myStoryPage[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "myStoryPage" && type == "media"]{
      _id,
       _createdAt,
      name,
      colorMode,
      language,
      "image": image.asset->url,
      blurURL,
      "video": video.asset->url,
    }`
  );
}

export async function getmyContent(): Promise<myStoryPage[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "myStoryPage" && type == "content"]{
      _id,
      _createdAt,
      name,
      language,
      header,
      content,
      type,
    }`
  );
}

export async function getmyColorImage(): Promise<myStoryPage[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "myStoryPage" && type == "ColorImage"]{
      _id,
       _createdAt,
      name,
      colorMode,
      "image": image.asset->url,
      blurURL,
      type,
    }`
  );
}
