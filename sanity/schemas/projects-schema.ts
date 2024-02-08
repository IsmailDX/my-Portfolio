const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "ProjectTitle",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "blurURL",
      title: "BlurURL",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "tech", title: "Tech", type: "string" },
            { name: "color", title: "Color", type: "string" },
          ],
        },
      ],
    },
    {
      name: "webLink",
      title: "WebLink",
      type: "string",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
};

export default projects;
