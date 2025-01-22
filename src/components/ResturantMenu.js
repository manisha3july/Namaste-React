import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "./utils/useResturantMenu";

const RestaurantMenu = () => {
  const { restID } = useParams();
  const restInfo = useResturantMenu(restID);

  // Display shimmer while loading
  // if (!restInfo) {
  //   return <Shimmer />;
  // }

  // Destructure restaurant details safely
  const { name, costForTwo, cuisines, avgRating } =
    restInfo?.cards[2]?.card?.card?.info || {};

  // Safely access itemCards with a fallback to an empty array
  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  return (
    <div className="restaurantMenuContainer">
      <h1 className="restaurantName">{name || "Restaurant Name Unavailable"}</h1>
      <p className="card-rating">Rating: {avgRating || "N/A"}</p>
      <h2 className="card-description">
        {cuisines?.length ? cuisines.join(", ") : "Cuisines Unavailable"}
      </h2>
      <p className="card-description">Price: {costForTwo || "N/A"}</p>

      <ul className="menuList">
        {itemCards.length ? (
          itemCards.map((item) => (
            <li key={item.card?.info?.id}>
              {item.card?.info?.name || "Item Name Unavailable"} - ₹
              {item.card?.info?.price / 100 || "N/A"}{" "}
              {item.card?.info?.description || ""}
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
