import { defineField, defineType } from "sanity";

export const test =defineType( {
    name: "test",
    type: "document",
    title: "test Profile",
    fields: [
      defineField({
        name: "name",
        type: "string",
        title: "Name",
        validation:(Rule:any)=>Rule.required(),
      }),
      defineField({
        name:"image",
        type:"image",  
        title:"Profile Image"
      })
    ],
  }
)