import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [resData, setResData] = useState(resList); // State to manage restaurant data
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter restaurant data based on rating
            console.log("Top Rated Restaurant");
            const filteredData = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setResData(filteredData); // Update state with filtered data
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
          resData.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
export default Body;
