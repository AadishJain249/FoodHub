import RestaurantCard from "../component/ResturantCard";
import Shimmer from "../../Shimmer";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../component/utils/helper";
import useOnline from "./utils/useOnline";
import Connection from "../component/Connection/Connection.jsx";
// import userContext from "../component/utils/useContext"
export const Body = () => {
  // const user=useContext(userContext)
  // console.log(user);
  const swiggy_url =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");
  const [restaurant, setResturant] = useState([]);
  // const {user,setUser}=useContext(userContext)
  const offline = useOnline();
  function searchData(text, restaurant) {
    const res = filterData(text, restaurant);
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
  useEffect(() => {
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
    setResturant(data);
    setSearch(data);
  }
  if (!offline) {
    return (
      <h1>
        <Connection></Connection>
      </h1>
    );
  }
  return (
    <div className="container">
      <div className="search-container">
        {/* <input
        type="text"
        className="search-container"
        key="1"
        value={user.name}
        onChange={(e)=>{
          setUser({
            name:e.target.value,
            email:"hey@gmail.com"
          })
        }}
        ></input> */}
        <input
          type="text"
          placeholder=" Search for restaurant"
          value={text}
          className="search-input"
          key="input-text1"
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
            return (
              <Link className="link-styles" to={"/resturant/" + res?.info?.id}>
                <RestaurantCard key={res?.info?.id} {...res.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
