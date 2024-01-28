const myStoryPage = {
  name: "myStoryPage",
  title: "MyStoryPage",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "colorMode",
      title: "ColorMode",
      type: "string",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "video",
      title: "Video",
      type: "file",
    },
    {
      name: "header",
      title: "Header",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
  ],
};

export default myStoryPage;
