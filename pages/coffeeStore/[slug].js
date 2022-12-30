import { useRouter } from "next/router"


const coffeeStore = () => {
    const router = useRouter();
    const id = router.query.slug;
    console.log(id, "id");
    console.log("router", router);
    return (
        <div>coffeeStore {id}</div>
    )
}

export default coffeeStore