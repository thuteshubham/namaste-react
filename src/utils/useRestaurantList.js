import { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "./constants";
export const useRestaurantList = async () => {
    try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6134806&lng=77.2189594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        debugger
        return json;
    }catch(e){
        throw e.message;
    }
};
