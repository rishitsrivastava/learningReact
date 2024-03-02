import { useState } from "react"
import { RestaurantData } from "../Constants"
import RestaurantCard from "./RestaurantCard"


// console.log(dataFromSearch)

function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) => {
        restaurant.info.name.includes(searchText);
    })
    return filteredData;
}

export const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [restaurants, setRestaurants] = useState(RestaurantData);

    return (
        <div>
            <div className="search">
                <input 
                    type="text"
                    placeholder="search"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}}
                />
                <button className="search-button" onClick={() => {
                    const data = filterData(searchText, restaurants);
                    setRestaurants(data);
                }} >Search</button>
            </div>
            <div className="body">
                {restaurants.map((restaurant, index) => {
                    return <RestaurantCard key={index} {...restaurant.info} />
                })}
            </div>
        </div>
    )
}