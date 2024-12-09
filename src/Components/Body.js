import React from 'react';
import { useState } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer'



// Main body
const Body = () =>  {
    // useState Hook
    let [listOfRestaurants, setlistOfRestaurants] = useState([]);
    let [listOfFilteredRestaurants, setlistOfFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantwithPromoted = withPromotedLabel(RestaurantCard);

    // hook which gets invoked after the component is rendered.
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfFilteredRestaurants(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfFilteredRestaurants.length == 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="search">
                <div> 
                    <input type="text" data-testid="searchInput" value={searchText} className="search-bar"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                </div>
                <div>
                    <button className="search-btn"
                        onClick={() => {
                            // Filter the restraunt cards and update the UI
                            // searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setlistOfFilteredRestaurants(filteredRestaurant);
                        }}> Search
                    </button>
                </div>

                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant) => {return restaurant.info.avgRating > 4});
                        setlistOfFilteredRestaurants(filteredList);
                        setlistOfRestaurants(filteredList);
                    }}>
                        Filter Top Rated
                    </button>
                </div>
            
            </div>
            
            <div className="res-container">
            {listOfFilteredRestaurants.map((restaurant) => (
                <Link
                    key={restaurant?.info.id}
                    to={"/restaurants/" + restaurant?.info.id}
                >
                    {restaurant?.info.promoted ? (<RestaurantwithPromoted resData={restaurant?.info} />) : (<RestaurantCard resData={restaurant?.info} />) }
                </Link>
            ))}
            </div>
        </div>
    );
}

export default Body;