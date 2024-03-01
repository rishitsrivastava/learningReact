
const ChineseWok = [{
    name : "Chinese Wok",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    cuisines: ["Chinese", "Asian"],
    rating: "4.2 stars"
}]


const RestaurantCard = () => {
    
    return (
        <div className="card">
            <img className="foodImage" src={ChineseWok[0].img} alt="food" />
            <p>{ChineseWok[0].name}</p>
            <p>{ChineseWok[0].cuisines.join(", ")}</p>
            <p>{ChineseWok[0].rating}</p>
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
            <RestaurantCard />
        </div>
    )
}