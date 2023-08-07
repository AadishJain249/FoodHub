import React, { useEffect, useState } from "react";
import { Img_Link, swiggy_url } from "../../../content";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./Resturant.css";
import ResturantMenu from "./ResturantMenu.jsx";
function Resturant() {
  const param = useParams();
  const id = param.id;
  const [restaurant, setResturant] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);
  async function getInfo() {
    const response = await fetch(swiggy_url + id);
    const res_data = await response.json();
    setResturant(res_data.data.cards[0].card.card.info);
    setMenu(res_data.data.cards[2].groupedCard.cardGroupMap.REGULAR);
  }

  let rating = restaurant.totalRatings;
  let check = restaurant.totalRatings;
  if (rating > 999) {
    rating = rating / 1000;
  }
  return (
    <>
      <div className="cont">
        <div className="restaurant-menu">
          <div className="restaurant-summary">
            <img
              className="restaurant-img"
              src={Img_Link + restaurant?.cloudinaryImageId}
              alt={restaurant?.name}
            />
            <div className="restaurant-summary-details">
              <h2 className="restaurant-title">{restaurant?.name}</h2>
              <p className="restaurant-tags">
                {restaurant?.cuisines?.join(", ")}
              </p>
              <div className="restaurant-details">
                <div className="restaurant-rating">
                  <AiFillStar />
                  <span>{restaurant?.avgRating}</span>
                </div>
                <div className="restaurant-rating-slash">|</div>
                <div>{restaurant?.locality}</div>
                <div className="restaurant-rating-slash">|</div>
                <div>{restaurant?.costForTwoMessage}</div>
                <div className="restaurant-rating-slash">|</div>
                <div>{check > 999 ? rating + "K+" : rating}</div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="available">Available Items</h2>
        <div className="menu">
        {menu &&
          menu.cards &&
          menu.cards.map((e, index) => {
            if (index >= 1 && index <= menu.cards.length - 3) {
              return <ResturantMenu {...e.card.card}></ResturantMenu>;
            }
          })}
          </div>
      </div>
    </>
  );
}

export default Resturant;
