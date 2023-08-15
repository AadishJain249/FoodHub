// creating our own hook
import React, { useEffect, useState } from "react";
import { swiggy_url } from "../../../content";
function useResturant(id) {
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
  return {restaurant,menu}
}

export default useResturant;
