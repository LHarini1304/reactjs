import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); // State to manage restaurant data
  const [searchText, setSearchText] = useState(""); // State to manage search text
  const [filteredResData, setFilteredResData] = useState([]); // State to manage filtered restaurant data
  // whenever state variable updates, the react trigger reconciliation process (re-rendering) to reflect the changes in the UI.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    setListOfRestaurant(
      //optional chaining operator (?.) is used to access deeply nested properties of an object without having to check if each reference in the chain is nullish (null or undefined).
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // Initialize filteredResData with the same data as resData
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); // Update search text state
            }}
          ></input>
          <button
            onClick={() => {
              const filterRes = listOfRestaurant.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) // Filter restaurant data based on search text
              );
              setFilteredResData(filterRes); // Update state with filtered data
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter restaurant data based on rating
            console.log("Top Rated Restaurant");
            const filteredData = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setFilteredResData(filteredData); // Update state with filtered data
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {
          /* Using map to render multiple restaurant cards */
          /* Using key to identify each restaurant card. 
                 Reason: React uses keys to identify which items have changed, are added, or are removed, 
                 So that it can optimize the rendering process , it won't re-render the entire list, only the items that have changed. */
          filteredResData.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
export default Body;
