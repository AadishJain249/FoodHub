import RestaurantCard from "../component/ResturantCard";
import Shimmer from "../../Shimmer";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../component/utils/helper";
import useOnline from "./utils/useOnline";
import "./Body.css";
import dummyData from '../data/dummy.js'
import Connection from "../component/Connection/Connection.jsx";
export const Body = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");
  const [restaurant, setResturant] = useState([]);
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
    try {
      const response=dummyData
      const json = response;
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
    } catch (error) {
      console.log(error.message);
    }
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
          Search
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
