import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getTotal } from './reducer';
import { NavLink } from "react-router-dom"

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">

            <CurrencyFormat
              renderText={(value)=>(
                  <>
                    <p> 
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                  </>
              )}
              decimalScale={2}
              thousandSeparator={true}
              prefix={'$'}
              displayType={'text'}
              value={ getTotal(basket) }
            />
            
            <NavLink to="/Payment">
                <button>Proceed To Checkout</button>
            </NavLink>
            
        </div>
    )
}

export default Subtotal
