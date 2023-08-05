import RestaurantCard from "../component/ResturantCard";
import Shimmer from "../../Shimmer";
import React, { useState, useEffect } from "react";
export const Body = () => {
  const swiggy_url =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");
  const [restaurant, setResturant] = useState([]);

  function filterData(text, Allrestaurant) {
    const resFilterData = Allrestaurant.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(text.toLowerCase())
    );
    return resFilterData;
  }
  function searchData(text, restaurant) {
    const res = filterData(text, restaurant);
    console.log(res.length);

    if (res?.length === 0) {
      setError("No matches restaurant found");
    } else if (text !== " ") {
      setSearch(res);
      setError("");
    } else {
      setSearch(restaurant);
      setError("");
    }
  }
  // console.log("render");
  useEffect(() => {
    // console.log("useEffect");
    getData();
  }, []);
  async function getData() {
    const response = await fetch(swiggy_url);
    const json = await response.json();
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const data = await checkJsonData(json);
    console.log(data);
    setResturant(data);
    setSearch(data);
  }
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search for restaurant"
          value={text}
          className="search-input"
          key="input-text"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            searchData(text, restaurant);
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      {error && (
        <div className="error-container" id="error">
          <span className="error-msg" id="error-msg">
            {error}
          </span>
        </div>
      )}
      {restaurant?.length === 0 ? (
        <Shimmer></Shimmer>
      ) : (
        <div className="restaurant-list">
          {search.map((res) => {
            return <RestaurantCard key={res?.info?.id} {...res.info} />;
          })}
        </div>
      )}
    </div>
  );
};
