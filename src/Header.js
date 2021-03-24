import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css"
import { NavLink } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }, dispatch] =  useStateValue();

    const handleAuthentication = () => {
       if(user){
         auth.signOut();
       }
    }

    return (
        <div className="header">
  
          <NavLink to="/">
          <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="img" />
          </NavLink>

          <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>
          </div>

          <div className="header_nav">

             <NavLink to={ !user && "/Login" }>
                <div onClick={handleAuthentication} className="header_option">
                  <span className="header_optionLineOne"> Hello, {user ? user.email : 'Guest' }</span>
                  <span className="header_optionLineTwo"> { user ? 'Sign Out' : 'Sing In'} </span>
                </div>
             </NavLink>
             
             <div className="header_option">
               <span className="header_optionLineOne"> Returns </span>
               <span className="header_optionLineTwo"> & Orders </span>
             </div>

             <div className="header_option">
               <span className="header_optionLineOne"> Your </span>
               <span className="header_optionLineTwo"> Prime </span>
             </div>

             <NavLink to="/checkout">
               <div className="header_optionBasket">
                 <ShoppingBasketIcon />
                 <span className="header_optionLineTwo header_basketCount"> {basket.length} </span>
               </div>
             </NavLink>

          </div>

        </div>
    )
}

export default Header;
