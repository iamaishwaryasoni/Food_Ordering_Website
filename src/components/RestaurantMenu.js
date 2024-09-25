import { useNavigate, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from "react";


const RestaurantMenu = () => {
    

    const {resId} = useParams()
    const route = useNavigate()

    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(resId);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(

        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
 
 //console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold text-3xl p-2 mt-5 ml-6">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <p className=" ml-8 space-x-2 font-semibold">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")} - 
             {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>

             <p className="ml-8 font-semibold">{resInfo?.cards[2]?.card?.card?.info?.avgRating} Star ⭐</p>
            {/* <ul className="ml-9 mt-4 p-2">
               
                 
                <li >
                {resInfo && resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}
                </li>
                <li>
                {resInfo && resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name}
                </li>
               <li>
               {resInfo && resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info?.name}
               </li>
               <li>
               {resInfo && resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.name}
               </li>
               <li>
               {resInfo && resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}
               </li>
            </ul> */}



           {
            categories && categories.map((category, index) => (
               <RestaurantCategory 
               key={category?.card?.card.title}
               data={category?.card?.card}
               showItem = {index === showIndex ? true : false}
               setShowIndex = {() => setShowIndex(index) }
               />
            ))
           }
             
        </div>
    )
}

export default  RestaurantMenu;


 {/* {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.
                    itemCards?.map(item =>
                    <li key={item?.card?.info?.name}
                     >item?.card?.info?.name </li>)} */}

                     {/* <li style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    
                }}  onClick={() => route("/about")}>
                    {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}
                </li> */}