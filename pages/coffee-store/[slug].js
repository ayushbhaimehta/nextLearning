import { useRouter } from "next/router";
import Link from "next/link";
import CoffeeStores from "../../data/coffee-stores.json";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";
import styles from "../../styles/coffee.module.css";


// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'fsq3kdGD9xgJITIEmEyBcs7laFbChZWM9lya4JJC+9IkA30='
//     }
// };
// fetch('https://api.foursquare.com/v3/places/search', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export async function getStaticProps(staticprops) {
    console.log("static", staticprops);
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
    const paths = CoffeeStores.map((Coffeeshops) => {
        return {
            params: {
                slug: Coffeeshops.id.toString(),
            },
        };
    })
    return {
        paths,
        fallback: true, // can also be true or 'blocking'
    }
}

const CoffeeStore = (props) => {

    const router = useRouter();
    if (router.isFallback) {
        return (
            <div>Loading...</div>
        )
    }
    const { address, name, neighbourhood, imgUrl } = props.coffee;
    console.log("props", props);
    const handleUpvoteButton = () => {
        console.log("upvote function yet to be added!");
    };

    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">
                            <a>Back to home</a>
                        </Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image
                        src={imgUrl}
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                    />
                </div>

                <div className={cls("glass", styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/places.svg" width="24" height="24" />
                        <p className={styles.text}>{address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/nearMe.svg" width="24" height="24" />
                        <p className={styles.text}>{neighbourhood}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/star.svg" width="24" height="24" />
                        <p className={styles.text}>1</p>
                    </div>

                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
                        Up vote!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeStore