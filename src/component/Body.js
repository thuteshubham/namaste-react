import { RestCardComponent } from "./RestCardComponent";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const Body= ()=>{

    console.log("Body rendered")

    const [restListItems, setListOfRestaurants]= useState([]) ;
    const [filteredRestList, setfilteredRestList]= useState([]) ;
    const [searchText,setSearchText]= useState("")

    useEffect(()=>{
       fectData()
    },[]);

    const fectData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6134806&lng=77.2189594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restListItems.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text"  value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
            <button onClick={()=> {
                const updatedRestListItems=restListItems
                .filter((restarant)=> restarant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                 setfilteredRestList(updatedRestListItems);   
            }
           
            }>Search</button>
          </div>
          <div className="filter-btn">
            <button
              className="filter-btn"
              onClick={() => {
               const updatedRestListItems = restListItems
               .filter((restaurant) => restaurant.info.avgRating > 4.5);
                setfilteredRestList(updatedRestListItems);
              }}
            >
              Top Rated restaurants
            </button>
          </div>
        </div>
        <div className="rest-container">
          {filteredRestList.map((restaurant, index) => (
            <RestCardComponent
              key={restaurant.info.id}
              id={restaurant.info.id}
              restData={restaurant}
            />
          ))}
        </div>
      </div>
    );
  }