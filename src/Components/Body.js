import resList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";

// Main body
const Body = () =>  (
    <div className="body">
        <div className="search-bar">Search</div>
        <div className="res-container">
        {resList.map((restaurant) => (
            <RestaurantCard resData={restaurant}/>
        ))}  
        </div>
    </div>
);

export default Body;