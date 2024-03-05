import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

export const useRestaurantMenu= (restaurantId)=>{

    const [restarauntDeatils,setRestarauntDeatils]=useState(null);

    useEffect(()=>{
        fetchRestarantData();
    },[])

    const fetchRestarantData= async() =>{
        const data= await fetch(`${MENU_API_URL}${restaurantId}`)
        const json= await data.json();
        console.log(json.data);
        setRestarauntDeatils(json.data);
    }
    return restarauntDeatils
}