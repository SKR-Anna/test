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
        <Card className="w-1/2 mx-auto bg-blue-50 shadow-lg rounded-lg overflow-hidden transition-transform duration-200 hover:shadow-xl hover:scale-105">
            <CardHeader className="p-4 border-b">
                <CardTitle className="text-xl font-semibold text-gray-800">Name: {user.name}</CardTitle>
                <CardDescription className="text-gray-500">Username: {user.username}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
                <p className="text-gray-700">Email: {user.email}</p>
                <p className="text-gray-700">Webside: {user.website}</p>
                <p className="text-gray-700">Company: {user.company.name}</p>
            </CardContent>
            <CardFooter className="p-4 border-t">
                <p className="text-gray-600">Address: {`${user.address.street} , ${user.address.city};` }</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
            </CardFooter>
        </Card>
    )
}

export default PersonCard;

