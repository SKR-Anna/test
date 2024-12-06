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
        <Card>
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.username}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{user.email}</p>
                <p>{user.website}</p>
                <p>{user.company.name}</p>
            </CardContent>
            <CardFooter>
                <p>{`${user.address.street} , ${user.address.city}` }</p>
                <p>{user.phone}</p>
            </CardFooter>
        </Card>
    )
}

export default PersonCard;

