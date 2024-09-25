import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=> {
       dispatch(clearCart());
    };


    return(
        <div className="text-center m-4 p-4">
            <div className="font-bold text-3xl" >Cart</div>
            <div className="w-6/12 m-auto">
                <ItemList  items={cartItems}/>

                <button className="bg-black text-white  rounded-md p-2 m-4" 
                 onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && <h2 className="font-semibold text-xl">Cart is empty Add items in your cart!</h2>}
            </div>
        </div>
    )
}

export default Cart;