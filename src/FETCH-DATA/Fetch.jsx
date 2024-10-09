
import { useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";
import FetchAPI from "./FetchAPI";

const Fetch = () => {
    const [data, loading] = FetchAPI();
    const [searchItem, setSearchItem] = useState("");
    const [category, setCategory] = useState("");
    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const filterItem = data.filter((value) => value.title.toLowerCase().includes(searchItem.toLowerCase()));
    const Category = filterItem.filter((value) =>
        value.category.toLowerCase().includes(category.toLowerCase())
    );

    return (

        <>
            <div className={styles.heading}>
                PRODUCTS
            </div>
            <div className={styles.box}>
                <div>
                    <input type="text"
                        placeholder="Search for items"
                        onChange={handleSearch}
                    />
                </div>
                <div>
                    <select value={category} onChange={handleCategory}>
                        <option value="">Select Category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
            </div>
            <div className={styles.main}>
                {
                    loading ? <div>Loading........</div> : data.length === 0 ? (<p>Data Not Found</p>) : <Card filterItem={Category} />
                }
            </div>
        </>
    )
}

export default Fetch
