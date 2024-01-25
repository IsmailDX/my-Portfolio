import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

const MyStory = async () => {
  const projects = await getProjects();
  return (
    <div className="bg-red-400 w-full h-full">
      {projects.map((project) => (
        <div key={project._id}>
          <div>{project.name} English</div>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MyStory;
