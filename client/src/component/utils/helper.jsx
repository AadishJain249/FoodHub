export const filterData = (text, Allrestaurant) => {
  const resFilterData = Allrestaurant.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(text.toLowerCase())
  );
  return resFilterData;
};
export const filterType = (text, res) => {
  const newData=[];
  res?.filter((props) => {
      if(props.itemAttribute?.vegClassifier=="VEG")
          newData.push(props);
    });
  return newData;};

export const users=localStorage.getItem("IsLogin")
