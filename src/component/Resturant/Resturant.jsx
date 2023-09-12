import React, { useEffect, useState } from "react";
import { Img_Link, swiggy_url } from "../../../content";
import { useParams } from "react-router-dom";
import "./Resturant.css";
import ResturantMenu from "./ResturantMenu.jsx";
import useResturant from "../utils/useResturant";
// import Shimmer from "../../../Shimmer";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { filterType } from "../utils/helper";
function Resturant() {
  function searchData(text, restaurant) {
    const res = filterType("VEG", restaurant);
    if(text==='NONVEG')
      setFilter(menu)
    else if (res?.length == 0) {
      setFilter(menu);
    } else if (res?.length !== 0) {
      setFilter(res);
    }
  }
  const { id } = useParams();
  const { restaurant, menu } = useResturant(id);
  const [text, setText] = useState();
  const [filter, setFilter] = useState([]);
  let rating = restaurant.totalRatings;
  let check = restaurant.totalRatings;
  if (rating > 999) {
    rating = rating / 1000;
  }
  console.log(filter);
  return (
    <>
      <div className="cont">
        <div className="cen">
          <Card
            sx={{
              width: 320,
              backgroundColor: "#FFF0F5",
              ":hover": { boxShadow: 20 },
            }}
          >
            <div>
              <Typography level="title-lg">{restaurant?.name}</Typography>
              <Typography level="body-sm">{restaurant?.locality}</Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                src={Img_Link + restaurant?.cloudinaryImageId}
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Rating:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  {check > 999 ? rating + "K+" : rating}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="search-container">
          <label for="exampleFormControlSelect1">Select Category</label>
          <select
            onChange={(e) => setText(e.target.value)}
            style={{ width: "150px" }}
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="VEG">Veg</option>
            <option value="NONVEG">Non Veg And Veg Both</option>
          </select>
          <button
            className="search-btn"
            style={{ backgroundColor: "#FFF0F5", border: "1px solid #FFF0F5" }}
            onClick={() => {
              searchData(text, menu);
            }}
          >
            Search
          </button>
        </div>
        <h2 className="available">Available Items</h2>
        <div className="menu">
            {filter.length!=0 && filter.cards.map(
              (e, index) => {
                return (
                  <ResturantMenu key={index} {...e.card.card}></ResturantMenu>
                );
              }
            )}
        </div>
      </div>
    </>
  );
}

export default Resturant;
