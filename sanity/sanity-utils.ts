import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { myStoryPage } from "@/types/myStoryPage";
import { education } from "@/types/education";
import { experience } from "@/types/experience";
import { projects } from "@/types/projects";

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
      "image": image.asset->url,
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
 
      name,
      colorMode,
      "image": image.asset->url,
      blurURL,
      type,
    }`
  );
}

export async function getmyEducation(): Promise<education[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "education"]{
      _id,
      _createdAt,
      name,
      schoolName,
      graduateDate,
      graduateLocation,
      language,
      "image": image.asset->url,
      blurURL,
      type,
      order,
    }`
  );
}

export async function getmyExperience(): Promise<experience[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"]{
      _id,
       
      jobTitle,
      company,
      country,
      employment_status,
      employment_period,
      responsibilities,
      language,
      order,
    }`
  );
}

export async function getMyProjects(): Promise<projects[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "projects"]{
      _id,
      _createdAt,
      projectTitle,
      "image": image.asset->url,
      description,
      technologies,
      webLink,
      language,
      order
    }`
  );
}
