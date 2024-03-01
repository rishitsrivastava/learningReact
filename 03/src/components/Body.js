import { ImageLink } from "../Constants"
import { RestaurantData } from "../Constants"
import { Search } from "./Search"


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
}) => {
    
    return (
        <div>
            <div className="card">
                <img className="foodImage" src={ImageLink + cloudinaryImageId} alt="food" />
                <p>{name}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating}</p>
            </div> 
        </div> 
    )
}


export const Body = () => {
    return (
        <div>
            <Search />
            <div className="body">
                {/* <RestaurantCard restaurant={RestaurantData[0]} />
                <RestaurantCard restaurant={RestaurantData[1]} />
                <RestaurantCard restaurant={RestaurantData[2]} />
                <RestaurantCard restaurant={RestaurantData[3]} />
                <RestaurantCard restaurant={RestaurantData[4]} />
                <RestaurantCard restaurant={RestaurantData[5]} />
                <RestaurantCard restaurant={RestaurantData[6]} />
                <RestaurantCard restaurant={RestaurantData[7]} />
                <RestaurantCard restaurant={RestaurantData[8]} />
                <RestaurantCard restaurant={RestaurantData[9]} />
                <RestaurantCard restaurant={RestaurantData[10]} />
                <RestaurantCard restaurant={RestaurantData[11]} />
                <RestaurantCard restaurant={RestaurantData[12]} /> */}
                {RestaurantData.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} />
                })}
            </div>
        </div>
    )
}