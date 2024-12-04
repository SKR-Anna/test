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
    users: User[]
};

const Card = ({ users }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"></div>
    )
}

<Card>
    <CardHeader>
        <CardTitle>user name</CardTitle>
    </CardHeader>
    <CardContent>
        <p>email</p>
        <p>company</p>
    </CardContent>
    <CardFooter>
        <Link href={}> переход на карточку person
        </Link>
    </CardFooter>
</Card>

export default <Card/>;