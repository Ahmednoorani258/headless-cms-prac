import { client } from "@/sanity/lib/client";

async function getData(){
  const fetchData = await client.fetch(`*[_type == 'student']`)
  return fetchData
}

export default async function Home() {
  
  const data = await getData()
  console.log(data)
  return (
    <div className="flex justify-center items-center">
      {data.map((val:any, id:number) => 
          
          <h1 key={id}>{val.name}</h1>
          
      )}
      hh
    </div>
  );
}
