import { RestCardComponent,WithPrimeLabel } from "./RestCardComponent";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { RESTAURANT_LIST_URL } from "../utils/constants";
export const Body= ()=>{

    console.log("Body rendered")

    const [restListItems, setListOfRestaurants]= useState([]) ;
    const [filteredRestList, setfilteredRestList]= useState([]) ;
    const [searchText,setSearchText]= useState("");

    const PrimeLableRestarantCard=WithPrimeLabel(RestCardComponent);

    useEffect(()=>{
       fectData();
       
    },[]);

    const fectData=async()=>{
        const data= await fetch(RESTAURANT_LIST_URL);
        const json=await data.json();

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus= useOnlineStatus();
    if(onlineStatus === false) return <h1> Looks like You are offline</h1>

    if (restListItems.length === 0) return  (<Shimmer />) 

    console.log("restListItems",restListItems)
   

    return (
      <div className="body">
        <div className="flex m-2 p-2">
          <div className="search">
            <input type="text" className="border border-solid border-black mx-2" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
            <button  className="border bg-green-100 hover:bg-green-200 rounded-md p-1" onClick={()=> {
                const updatedRestListItems=restListItems
                .filter((restarant)=> restarant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                 setfilteredRestList(updatedRestListItems);   
            }}>Search</button>
          </div>
          <div className="mx-4 px-4">
            <button
              className="mx-4 p-1 bg-gray-200 hover:bg-gray-300  text-wrap rounded-md"
              
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
        <div className="m-2 p-2 flex flex-wrap">
          {filteredRestList.map((restaurant, index) => (
            <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
              {/* if restarant is from cannaouth place give prime label on a card */}
              {restaurant.info.locality === "Connaught Place" ? 
              (< PrimeLableRestarantCard  id={restaurant.info.id} restData={restaurant}/>) 
              : (<RestCardComponent id={restaurant.info.id} restData={restaurant}/>)}
            </Link>
          ))}
        </div>
      </div>
    );
  }