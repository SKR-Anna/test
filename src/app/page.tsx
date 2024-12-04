import { notFound } from "next/navigation";

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'force-cache',
    next: {
      revalidate: 3600 // 1 hour
    },
  });
  const data = await response.json();
  return data
}

export default async function Page() {
  const data = await fetchData();
  console.log(data);
  if(!data) notFound();
  
  return (
  <div> Стартовая страница </div>
)};
