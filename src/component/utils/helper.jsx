
export const filterData=(text, Allrestaurant)=> {
    const resFilterData = Allrestaurant.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(text.toLowerCase())
    );
    return resFilterData;
  }