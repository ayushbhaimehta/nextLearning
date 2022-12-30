import { useRouter } from "next/router"

const dynamic = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>welcome to the dynamic route for {router.query.slug} </div>
    )
}

export default dynamic