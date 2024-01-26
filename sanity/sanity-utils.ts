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

export async function getmyStoryPage(): Promise<myStoryPage[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "myStoryPage"]{
      _id,
      _createdAt,
      name,
      colorMode,
      language,
      "image": image.asset->url,
      "video": video.asset->url,
    }`
  );
}
