import { GetStaticProps } from "next";
import { User } from "../types/types";
import UserCard from "@/components/Home";

interface Props {
  users: User[];
}

const Page = ({ users}: Props) => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export const fetchData: GetStaticProps = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: {
        revalidate: 3600 // 1 hour
  }
});
    const users: User[] = await response.json();
    return {props: {users} };
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    return {props: {users:[]} } // Возвращаем пустой массив в случае ошибки
  }
}

export default Page;



// const fetchData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//     // cache: 'force-cache',
//     next: {
//       revalidate: 3600 // 1 hour
//     },
//   });
//   const data = await response.json();
//   return data
// }

// export default async function Page() {
//   const data = await fetchData();
//   console.log(data);
//   if(!data) notFound();
  
//   return (
//   <div> Стартовая страница </div>
// )};
