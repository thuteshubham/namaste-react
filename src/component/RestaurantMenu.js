import { useEffect, useState } from "react"
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  restarauntDeatils = useRestaurantMenu(restaurantId);

  if (restarauntDeatils === null) {
    return <Shimmer />;
  } else {
    const { name, city, costForTwoMessage } =
      restarauntDeatils?.cards[0]?.card?.card?.info;
    const { itemCards } =
      restarauntDeatils?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card;
    return (
      <div>
        <h2>Name :{name} </h2>
        <h3>Address: {city}</h3>
        <h4> {costForTwoMessage}</h4>
        <h3>Menu:</h3> 
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};