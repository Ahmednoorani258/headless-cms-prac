export const teacher = {
  name: "teacher",
  type: "document",
  title: "Teacher Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "teacher Name",
      validation:(Rule:any)=>Rule.required(),
    },
    {
      name: "age",
      type: "number",
      title: "teacher Age",
      hidden: ({document}:any)=> document.name === "khalid", 
      readonly : ({document}:any)=> document.name === "ahmed"
    },
    {
      name: "subject",
      type: "reference",
      to: [{ type: "subjects" }],
      title: "Subject",
    },
  ],
};
