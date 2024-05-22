import  { useEffect, useState } from "react";
function useResturant(id) {
  const [restaurant, setRestaurant] = useState([]);
  const [menu,setMenuItems ] = useState([]);
   const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
 const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
  useEffect(() => {
    
    getInfo();
  }, []);
  async function getInfo() {
    try {
      const swiggy_url='https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=';
      const response = await fetch(swiggy_url + id);
      if (!response.ok) {
          const err = response.status;
          throw new Error(err);
      } else {
          const json = await response.json();
          const restaurantData =
              json?.data?.cards
                  ?.map((x) => x.card)
                  ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
                  ?.info || null;
          setRestaurant(restaurantData);
          const menuItemsData =
              json?.data?.cards
                  .find((x) => x.groupedCard)
                  ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                      (x) => x.card?.card
                  )
                  ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
                  ?.map((x) => x.itemCards)
                  .flat()
                  .map((x) => x.card?.info) || [];

          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {
              if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                  uniqueMenuItems.push(item);
              }
          });
          setMenuItems(uniqueMenuItems);
      }
  } catch (err) {
      setMenuItems([]);
      setRestaurant(null);
      console.error(err);
  }
    
  }
  return {restaurant,menu,id}
}
export default useResturant;