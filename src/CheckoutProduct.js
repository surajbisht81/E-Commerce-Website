import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = (props) => {

    const [{basket}, dispatch] = useStateValue(); 

    const removeFromBasket = () => {
          dispatch({
              type: "REMOVE_FROM_BASKET",
              id: props.id
          })
    }

    return (
        <>
        <div className="checkout_Product">
            <img className="CheckoutProduct_image" src={props.image} alt="product_img" />

            <div className="CheckoutProduct_info">
                <p className="CheckoutProduct_title"> {props.title} </p>

                <p className="CheckoutProduct_price">
                    <small>$</small>
                    <strong> {props.price} </strong>
                </p>

                <div className="CheckoutProduct_rating">
                     { Array(props.rating).fill("⭐") }
                </div>

                <button onClick={ removeFromBasket } > Remove from Basket</button>
            </div>
        </div>
        </>
    )
}

export default CheckoutProduct;
