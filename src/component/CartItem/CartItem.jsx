import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import FoodItem from '../Resturant/FoodItem.jsx'
import "./CartItem.css"
function CartItem() {
 const cartItems=useSelector(store=>store.cart.items)
  return (
    <>
    <p className='p2'>Item Selected  :  {cartItems.length}</p>
    {cartItems && cartItems.map((e,index)=>{ return <FoodItem key={index} {...e}></FoodItem>})}
    </>
  )
}
export default CartItem