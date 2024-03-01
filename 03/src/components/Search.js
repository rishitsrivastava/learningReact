import { useState } from "react";
import { RestaurantData } from "../Constants";


function filter(searchText, restaurant) {
    try {
        console.log(searchText);
        return restaurant.filter((searchRestaurant) => {
            searchRestaurant.info.name.includes(searchText);
        })
    } catch(error) {
        console.log(error)
    }
}



export const Search = () => {
    const [restaurant, setRestaurant] = useState(RestaurantData);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="search">
            <input 
                type="text"
                placeholder="search"
                className="search-input"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
            <button className="search-button" onClick={() => {
                const data = filter(searchText, restaurant);
                setRestaurant(data);
            }}>Search</button>
            
        </div>
    )
}