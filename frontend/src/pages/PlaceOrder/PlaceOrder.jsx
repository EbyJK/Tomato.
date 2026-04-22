import React from 'react'
import './PlaceOrder.css'




const PlaceOrder = () => {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">

          <input type="text" placeholder='First name'></input>
          <input type="text" placeholder='Last name'></input>

        </div>
        <input type="email" placeholder='Email address'></input>
        <input type="text" placeholder='Street'></input>
         <div className="multi-fields">

          <input type="text" placeholder='City'></input>
          <input type="text" placeholder='State'></input>

        </div>
         <div className="multi-fields">

          <input type="text" placeholder='Zip Code'></input>
          <input type="text" placeholder='Country'></input>

        </div>
        <input type="text" placeholder="Phone"></input>
      </div>

      <div className="place-order-right">




      </div>
    </form>
  )
}

export default PlaceOrder
