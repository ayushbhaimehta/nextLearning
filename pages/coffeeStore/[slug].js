import { useRouter } from "next/router"
import Link from "next/link";

const coffeeStore = () => {
    const router = useRouter();
    const id = router.query.slug;
    console.log(id, "id");
    console.log("router", router);
    return (
        <div>coffeeStore {id}
            <Link href='/'> back to Home</Link>
        </div>
    )
}

export default coffeeStore