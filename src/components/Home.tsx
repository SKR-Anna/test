import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link";
import { User } from '@/types/types';

interface Props {
    user: User
};

const UserCard: React.FC<Props> = ({ user }) => {
    return (
    <Card>
    <CardHeader>
        <CardTitle>{user.name}</CardTitle>
    </CardHeader>
    <CardContent>
        <p>{user.email}</p>
        <p>{user.company.name}</p>
    </CardContent>
    <CardFooter>
        <Link href={`/user/${user.id}`}> переход на карточку person
        </Link>
    </CardFooter>
</Card>
    )
}



export default UserCard;