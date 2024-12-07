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
    <Card className="shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="bg-blue-500 text-white text-center p-4">
        <CardTitle className="text-xl font-bold">Name: {user.name}</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
        <p className="text-gray-700">Email: {user.email}</p>
        <p className="text-gray-600">Company: {user.company.name}</p>
    </CardContent>
    <CardFooter className="bg-gray-100 p-4 text-center">
        <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline"> Link to person card
        </Link>
    </CardFooter>
</Card>
    )
}

export default UserCard;