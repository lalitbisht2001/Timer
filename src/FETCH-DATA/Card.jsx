import styles from "./Card.module.css";
// import FetchAPI from "./FetchAPI";
const Card = ({ filterItem }) => {
    // const [data,] = FetchAPI();

    return (
        <>
            {
                filterItem.map(({ _id, image, title, oldPrice, price, category, rating }) => (
                    <div key={_id} className={styles.card}>
                        <div className={styles.image}>
                            <img src={image} alt="loading....." />
                        </div>
                        <div className={styles.desp}>
                            <p className={styles.title}>{title}</p>
                            <div className={styles.about}>
                                <p><span>Old Price :</span> {oldPrice}</p>
                                <p><span>Price : </span>{price}</p>
                                <p><span>Category : </span>{category}</p>
                                <p><span>Rating : </span>{rating}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card
