import React from 'react'
import { useSelector } from 'react-redux'
import FoodItem from '../Resturant/FoodItem.jsx'
import "./CartItem.css"
function CartItem() {
 const cartItems=useSelector((store)=>store.cart.items)
  return (
    <>
    <div className='main2'>
    <p className='p2'>Item Selected  :  {cartItems.length}</p>
    <div className='main1'>
    {cartItems && cartItems.map((e,index)=>{ return <FoodItem key={index} {...e}></FoodItem>})}
    </div>
    </div>
    </>
  )
}
export default CartItem