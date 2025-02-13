import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    //console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
            dispatch(addItem(item));
    }

    return(
        <div>
            {items && items.map((item) => (
                <div key={item.card.info.id}  
                className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                    <div className="py-2 font-semibold">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                        </span>
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                </div>

                <div className="w-3/12 p-4 ">
                    <button className="w-[80px] h-[30px] mx-16 my-10 bg-black text-white  shadow-lg rounded-md " 
                     onClick={() => handleAddItem(item)}
                     >Add + </button>
                </div>
                </div>
            ))}
        </div>
    )
}


export default ItemList;