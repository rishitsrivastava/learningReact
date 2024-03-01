
const RestaurantCard = () => {
    
    return (
        <div className="card">
            <img className="foodImage" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="food" />
            <p>Chinese Wok</p>
            <p>Chinese Asian</p>
            <p>4.2 stars</p>
        </div>  
    )
}


export const Body = () => {
    return (
        <div className="body">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    )
}