export const filterData = (text, Allrestaurant) => {
  const resFilterData = Allrestaurant.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(text.toLowerCase())
  );
  return resFilterData;
};
export const filterType = (text, res) => {
  const data = res?.cards?.filter((props, index) => {
    props?.card?.card?.itemCards?.filter((props1) => 
    (
      props1?.card?.info?.itemAttribute?.vegClassifier==="VEG"
    )
    );
  });
  console.log(data);
  return data;
};

export const users=localStorage.getItem("IsLogin")
