import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'test']{
  name,
    "imageUrl": image.asset -> url
}`);
  return fetchData;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex justify-center items-center">
      {data.map((val: any, id: number) => (
       <>
        <h1 key={id}>{val.name}</h1>
        <Image src={val.imageUrl} alt="image" width={100} height={100}/>
       </>
      ))}
      hh
    </div>
  );
}
