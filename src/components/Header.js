
import { Link } from "react-router-dom";
import {LOGO_URL, CART_URL} from "../utils/constant"

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import {  useSelector } from "react-redux";


const Header = () => {

   const [btnlog, setBtnlog] = useState("Login");
   
    const OnlineStatus = useOnlineStatus();
 
    const {loggedInUser} = useContext(UserContext);
   
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

   

    return (
        <div className="flex justify-between shadow-md h-24 sm: bg-green-200 lg:bg-white ">
          <div className="">
            <img className="w-16 h-16  m-5 rounded-full" 
            src= {LOGO_URL} />
          </div>
          
           <div className="flex items-center ">
              <ul className="flex p-4 m-4">
                <li className="px-3 mt-8">
                  Online Status: {OnlineStatus ? " ✅" : "🔴"}
                </li>
                <li className="px-3 mt-8">
                  <Link to ="/">Home</Link>
                </li>
                <li className="px-3 mt-8">
                  <Link to="/about">  About Us</Link>
                </li>
                <li className="px-3 mt-8">
                  <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="px-3 mt-8">
                    <Link to = "/grocery"> Grocery</Link>
                  </li>
                <li className="px-3 font-bold text-sm ">
                  <Link to="/cart" className="flex">
                  <img className="w-10 h-10  m-5 rounded-full"
                  src={CART_URL} />
                  <li className="mt-8 "> ({cartItems.length} items)</li>
                  </Link>
                </li>
                <button className="px-4 mt-2"
                 onClick={() => {
                  btnlog == "Login" 
                  ?setBtnlog ("Logout")
                  :setBtnlog("Login");
                 }}
                >
                 {btnlog}
                </button>
               
               <li className="font-bold mt-8">{loggedInUser}</li>

              </ul>
           </div>

        </div>
        )
}

export default Header;