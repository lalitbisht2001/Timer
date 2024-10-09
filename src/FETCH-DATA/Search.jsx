import { useState } from "react";
import styles from "./Card.module.css";

const Search = () => {

    const [searchItem, setSearchItem] = useState("");
    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }
    const filterItem = Data.filter((value) => value.toLowerCase().includes(searchItem.toLowerCase()));

    return (
        <div className={styles.box}>
            <div>
                <input type="text"
                    placeholder="Search for items"
                    onChange={handleSearch}
                />
            </div>
        </div>
    )
}

export default Search
