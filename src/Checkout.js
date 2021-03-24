import React from 'react';
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct.js";


function Checkout() {

   const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
               <img className="checkout_ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
                  alt="add_img"
               />

               <div className="checkout_title">
                  <h4> Hello, {user ? user?.email : "Guest"} </h4>
                  {/* <h4> Hello, {user.email} </h4> */}
                  <h2>Your Shopping Basket</h2>
               </div>
               
                 { basket.map( item => 
                     <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                     />
                  )}

            </div>

            <div className="checkout_right">
               <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
