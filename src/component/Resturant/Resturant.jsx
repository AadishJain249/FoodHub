import React, { useEffect, useState } from "react";
import { Img_Link, swiggy_url } from "../../../content";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./Resturant.css";
import ResturantMenu from "./ResturantMenu.jsx";
import useResturant from "../utils/useResturant";
import Shimmer from "../../../Shimmer";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
function Resturant() {
  const {id} = useParams();
  const {restaurant,menu}=useResturant(id)
  let rating = restaurant.totalRatings;
  let check = restaurant.totalRatings;
  if (rating > 999) {
    rating = rating / 1000;
  }
  return (
    <>
      <div className="cont">
      <div className="cen">
      <Card sx={{ width: 320 ,backgroundColor:"#FFF0F5",":hover":{  boxShadow: 20,}}}>
      <div>
        <Typography level="title-lg">{restaurant?.name}</Typography>
        <Typography level="body-sm">{restaurant?.locality}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
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
        <h2 className="available">Available Items</h2>
        <div className="menu">
        {menu.length===0?(<Shimmer></Shimmer>):
          menu.cards.map((e, index) => {
            if (index >= 1 && index <= menu.cards.length - 3) {
              return <ResturantMenu key={index}{...e.card.card}></ResturantMenu>
            }
          })}
          </div>
      </div>
    </>
  );
}

export default Resturant;
