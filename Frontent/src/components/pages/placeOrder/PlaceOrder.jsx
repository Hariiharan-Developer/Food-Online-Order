import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalcartAmount}=useContext(StoreContext)
  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="password" placeholder='Street' />
             <div className="multi-fields">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
        </div>
             <div className="multi-fields">
        <input type="text" placeholder='Zip code'/>
        <input type="text" placeholder='country'/>
        </div>
        <input type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
           <div className="cart-total">
         <p className='title'>Cart Totals</p>
        <div>
          <hr/>
          <div className="cart-total-deails">
          <p>Subtotal</p>
          <p>{getTotalcartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-deails">
          <p>Delevery Fee</p>
          <p>${getTotalcartAmount()===0?0:25}</p>
          </div>
          <hr/>
          <div className="cart-total-deails">
            <b>Total</b>
            <b>{getTotalcartAmount()===0?0:getTotalcartAmount()+25}</b>
          </div>
        </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
      </div>
        </div>
        
      </form>
    </div>
  )
}

export default PlaceOrder
