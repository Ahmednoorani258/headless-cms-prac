import { list } from "postcss";

export const student = {
    name: 'student',
    type: 'document',
    title: 'Student Profile',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Student Name'
        },
        {
            name:'age',
            type:'number',
            title:'Student Age'
        },
        {
            name:'gender',
            type:'string',
            title:'Gender',
            options:{
                list:[
                    {title:"Male",value: "male"},
                    {title:"Female",value: "female"},
                    {title:"Other",value: "other"},
                ],
                layout: "dropdown",
            },
        },
        {
            name:'image',
            type:'image',
            title: "Select Image"
        },
        {
            title:'Hobby',
            name:'hobby',
            type:'array',
            of: [{type:'string'}]
        },
        {
            title:'Skills',
            name:'skill',
            type:'array',
            of: [{type:'string'}],
            options:{
                layout:'skill'
            }
        },
        {
            title:'Date of birth',
            name:'dob',
            type:'date',
        }
    ]
}