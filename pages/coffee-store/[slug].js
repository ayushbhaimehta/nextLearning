import { useRouter } from "next/router";
import Link from "next/link";
import CoffeeStores from "../../data/coffee-stores.json"

export async function getStaticProps(staticprops) {
    console.log(staticprops);
    const params = staticprops.params;
    return {
        props: {
            coffee: CoffeeStores.find((coffee) => {
                return coffee.id.toString() === params.slug; // dynamic id one
            })
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: '0' } }, { params: { slug: '1' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

const CoffeeStore = (props) => {

    const router = useRouter();
    console.log("props", props);
    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">
                <a>Back to home</a>
            </Link>
            <Link href="/coffee-store/dynamic">
                <a> Go to page dynamic</a>
            </Link>
            <p>{props.coffee.address}</p>
            <p>{props.coffee.name}</p>
        </div>
    )
}

export default CoffeeStore