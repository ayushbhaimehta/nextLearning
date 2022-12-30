import styles from "../styles/banner.module.css";

const banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>
                <span className={styles.title2}>Connoiseur</span>
            </h1>
            <p className={styles.subTitle}>
                Discover your local coffee stores!
            </p>
            <button className={styles.button} onClick={props.handleClick}>{props.btntext}</button>
        </div>
    )
}

export default banner