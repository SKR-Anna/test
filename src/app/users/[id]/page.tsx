
import PersonCard from "@/components/Person";
import { User } from "@/types/types";


const fetchPersonData = async (id: string): Promise<User>=> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const personData: User = await response.json();
  return personData;
}


export default async function Person({ params }: {params: {id: string}}) {
  const user = await fetchPersonData(params.id);
  if(!user) {
    return <div>Пользователь не найден</div>;
  }
  return (
  <div>
    <PersonCard user={user}/>
  </div>
)};