import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";

import UserContext from "../utils/userContext";

const Body = () => {

    const [list, setList] = useState([]);
    const [fliteredRestaurant, setFilteredRestuarant] =useState ([]) ;
    const [searchText, setSearchtext] = useState("");

    useEffect(() => {
        fetchData();
    },
    [])

    const fetchData = async () => {
        try{
        const data = await fetch(
            // "https://mocki.io/v1/af39e235-6ae6-4fa8-ac32-757d58791846"
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

 

        const jjson = await data.json();
        
        console.log(jjson, "test1" )
        setList(jjson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jjson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, "testt")
        } catch (error) {
       
        console.log(error);
    }
}
 
const RestaurantPromotedCard = withPromotedLabel(ResturantCard);


    //  const handlePromoted = () => {

    //  }

    const handleFilter = (  ) => {
        const filteredList = list.filter(
            (restaurant) => restaurant.info.avgRating > 4.2
            );
        console.log(filteredList);
        setList(filteredList);
    }
 const  searchHandler= ()=>{
       const fliteredRestaurant = list.filter((res) => 
       res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
        
       setFilteredRestuarant(fliteredRestaurant);
 }

  useEffect(() => {
    searchHandler();
  },[searchText]) // countinuslly update


  const OnlineStatus = useOnlineStatus();

  if(OnlineStatus === false) return(
      <div>
      <h1>Please Check Your Internet Connection!</h1>
      <h2> It's Look like you are offline</h2>
      </div>
  )


  const {loggedInUser, setUserName} = useContext(UserContext);
    return(
        <div className="body">

            <div className="flex items-center justify-center">
                 
               <div className="search m-5 p-4">
                <input type="text"
                 className="border border-solid border-black  " 
                value={searchText} 
                 onChange={(e) => {
                  setSearchtext(e.target.value);
                 }}
                />
                <button
                 className="px-4 py-1 ml-2 bg-yellow-400 rounded-lg font-semibold shadow-md"
                  onClick={searchHandler}
                 >Search</button>

               </div>

                  <div className="search m-4 p-4 flex items-center">  
                 <button className="px-4 py-1  bg-yellow-400 rounded-lg font-semibold shadow-md"
                  onClick = {handleFilter}>
                    Top Rated Restaurent
                 </button>
                 </div>

                 <div className="search m-4 p-4 flex items-center">
                  <label className="font-semibold"> UserName : </label>
                  <input className="border border-solid border-black m-1 p-[1px]" 
                  value={loggedInUser}
                  onChange={(e) => setUserName(e.target.value)} />
                 </div>
                  </div>
             <div className=" m-5 flex flex-wrap items-center justify-center">
                
              {fliteredRestaurant.length === 0 && list && list.map((restaurant) => (
                <Link 
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id }
                >
                  {restaurant.info.avgRating >4.3 ? (
                    <RestaurantPromotedCard resData = {restaurant}/>
                  ) : 
                  (<ResturantCard   resData = {restaurant} />)}
                
                </Link>
              ))}
              
              {fliteredRestaurant.length > 0 && fliteredRestaurant.map((restaurant) => (
                <Link 
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id }
                >
               {restaurant.info.avgRating >4.3 ? (
                    <RestaurantPromotedCard resData = {restaurant}/>
                  ) : 
                  (<ResturantCard   resData = {restaurant} />)}
              </Link>
               ))}
              
               
             </div>
        </div>
    )
}

export default Body;