const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "employment_status",
      title: "Employment_status",
      type: "string",
    },
    {
      name: "employment_period",
      title: "Employment_period",
      type: "string",
    },
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "block" }],
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

export default experience;
