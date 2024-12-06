
import UserCard from "@/components/Home";
import { User } from "../types/types";

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
  const users = await fetchData();
  console.log(users);
  // if(!data) notFound();
  if (!users || users.length === 0) {
    return <div>Пользователи не найдены</div>;
  }
  
  return (
  // <div> Стартовая страница </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {users.map((user: User) => (
  <UserCard key={user.id} user={user} />
))}
</div> 
)};
