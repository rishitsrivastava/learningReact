import { ImageLink } from "../Constants"

export default RestaurantCard = ({
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