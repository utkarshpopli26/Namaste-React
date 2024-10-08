import React from 'react';
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";


// Main body
const Body = () =>  {
    // useState Hook
        let [listOfRestaurants, setlistOfRestaurants] = useState([]);
        let [listOfFilteredRestaurants, setlistOfFilteredRestaurants] = useState([]);
        const [searchText, setsearchText] = useState("");


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
        setlistOfRestaurants(json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfFilteredRestaurants(json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className="body">
            <div className="search">
            <input type="text" className="search-box" value={searchText} onchange={(e)=>{setsearchText(e.target.value)}}/>
            <button className="searchBtn" onClick={() => {
                console.log(searchText);
            }}>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurant) => {return restaurant.data.avgRating > 4});
                    setlistOfFilteredRestaurants(filteredList);
                }}>
                    Filter Top Rated
                </button>
            </div>

            <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}  
            </div>
        </div>
    );
}

export default Body;