import React from "react";
import { auth } from "./firebase";
import "./Header.css";
import { Link  } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket,user},dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        {/*logo */}
        <img
          className="header__logo"
          src="https://www.fontshut.com/wp-content/uploads/2023/02/Amazon-Logo-Font-1-scaled-1.jpg"
          alt=""
        ></img>
      </Link>
      {/*search bar and icon */}
      <div className="header__search">
        <input type="text" className="header__searchinput"></input>
        <SearchIcon className="header__searchicon"></SearchIcon>
      </div>
      {/*3 links */}
      <div className="header__nav">
        {/*first link */}
        <Link to={!user&&'./login'} className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">{user ? user?.email : 'Hello Guest'}</span>
            <span className="header__optionlinetwo">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        {/*2 link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone" >Returns</span>
            <span className="header__optionlinetwo">& Order</span>
          </div>
        </Link>
        {/*3 link */}
        <Link  to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Yours</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>
        </Link>
        {/*4th link */}
          
        <Link to="/checkout" className="header__link"  >
        <div className="header__optionBasket">
          {/*shopping backet */}
          <ShoppingBasketIcon></ShoppingBasketIcon>
          {/*Number of items in the absket */}
          <span className=" header__optionlinetwo header__basketCount">{basket?.length}</span>
            </div>
          </Link>
      </div>
    </nav>
  );
}

export default Header;
