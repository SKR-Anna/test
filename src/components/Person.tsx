import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { User } from '@/types/types';

interface Props {
    user: User
};

const PersonCard: React.FC<Props> = ({ user }) => {
    return (
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-4 border-b">
                <CardTitle className="text-xl font-semibold text-gray-800">{user.name}</CardTitle>
                <CardDescription className="text-gray-500">{user.username}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-700">{user.website}</p>
                <p className="text-gray-700">{user.company.name}</p>
            </CardContent>
            <CardFooter className="p-4 border-t">
                <p className="text-gray-600">{`${user.address.street} , ${user.address.city}` }</p>
                <p className="text-gray-600">{user.phone}</p>
            </CardFooter>
        </Card>
    )
}

export default PersonCard;

