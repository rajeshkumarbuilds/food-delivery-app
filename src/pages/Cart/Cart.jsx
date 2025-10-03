import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { food_list, removeFromCart, cartItem } = useContext(StoreContext)

  const getSubtotal = () => {
    return food_list.reduce((acc, item) => {
      if (cartItem[item._id] > 0) {
        return acc + item.price * cartItem[item._id]
      }
      return acc
    }, 0)
  }

  const getCartCount = () => {
    return Object.values(cartItem).reduce((acc, curr) => acc + curr, 0)
  }

  const deliveryFee = 50
  const subtotal = getSubtotal()
  const total = subtotal + deliveryFee

  return (
    <div className='cart'>
      {getCartCount() > 0 ? (
        <>
          <div className="cart-items">
            <div className="cart-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />

            {food_list.map((item) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div>
                  <div key={item._id} className='cart-title cart-items-item'>
                    <img src={item.image} alt="item_image" />
                    
                    <p>{item.name}</p>
                    <p>Rs {item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>Rs {item.price * cartItem[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} style={{cursor:"pointer",color:"red"}}>X</p>
                  </div>
                  <hr />
                  </div>
                )
              }
              return null
            })}
          </div>

         
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <hr />
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>Rs {subtotal}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery fee</p>
                  <p>Rs {deliveryFee}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>Rs {total}</b>
                </div>
              </div>
              <button>Proceed To Checkout</button>
            </div>

          
            <div className="cart-promocode">
              <div>
                <p>Have a promocode?</p>
                <div className='cart-promocode-input'>
                  <input type="text" placeholder='Enter promocode' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No item in cart</p>
      )}
    </div>
  )
}

export default Cart
