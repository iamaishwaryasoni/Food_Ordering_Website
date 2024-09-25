import ItemList from "./ItemList";
import React from "react";

const RestaurantCategory = ({data, showItem, setShowIndex , showIndex}) => {
    //console.log(data);

    // const [showItem, setShowItem]= useState(false);
  
    const handleClick = () => {
        setShowIndex(!showIndex);
    };

    return(
        <div>
            <div className="w-6/12 bg-gray-50 shadow-md p-2 mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.title}  ({data.itemCards.length}) </span>
                <span>🔽</span>
                </div>

              {showItem && <ItemList items= {data.itemCards} />  }
            </div>

            
        </div>
    )
}

export default RestaurantCategory;