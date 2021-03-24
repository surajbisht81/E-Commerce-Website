import React from 'react';
import "./Payment.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { NavLink, useHistory } from "react-router-dom";
import { getTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';

function Payment() {

    const history = useHistory();

    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className="payment">

            <div className="payment_container">
                <h1>Checkout 
                    <NavLink to="/Checkout">
                       ({basket?.length} Items) 
                    </NavLink>
                </h1>
            </div>
 
            {/* Delivery Address */}
            <div className="payment_section">
                 <div className="payment_title">
                       <h3> Delivery Address </h3>
                 </div>
                 <div className="payment_address">
                      <p> {user?.email} </p>
                      <p> Los Angela</p>
                      <p> CA </p>
                 </div>
            </div>


            {/* Review items */}
            <div className="payment_section">
                 <div className="payment_title">
                       <h3> Review items and Delivery </h3>
                 </div>
                 <div className="payment_items">
                       { basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                       ))}
                 </div>
            </div>


                {/* Payment method */}
            <div className="payment_section">
                 <div className="payment_title">
                        <h3> Payment Method </h3>
                 </div>

                 <div className="payment_details">

                       <form >
                           <CurrencyFormat
                                    renderText={(value)=>(
                                            <p> 
                                                <h3>Order Total: {value} </h3>
                                            </p>
                                    )}
                                    decimalScale={2}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    displayType={'text'}
                                    value={ getTotal(basket) }
                            />
                       </form>
                       <button>
                           <NavLink to="/">
                               Go to Home 
                           </NavLink>
                        </button>
                  </div>
            </div>

        </div>
    )
}

export default Payment;
