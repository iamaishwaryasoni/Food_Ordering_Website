
import {CDN_URL} from "../utils/constant";


const ResturantCard = ({resData}) => {

     const{
        name,
        avgRating,
        cuisines,
        costForTwo,
        
     } = resData?.info;

     const{
        deliveryTime
     }= resData?.info.sla;

    console.log(resData, "resData")


    return(
        <div className="p-4 m-4 mr-10  w-[300px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200" 
        >
            <img className="rounded-lg" 
             src= {CDN_URL } /> 
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo } </h4>
            <h4>{deliveryTime} minutes</h4>
           
        </div>
    );
};

export const withPromotedLabel = (ResturantCard) =>{
    return (props) => {
        return(
            <div>
        <label className="absolute bg-black text-white p-1 rounded-sm">Promoted</label>
        <ResturantCard  {...props}/>
        </div>
        )
    }

} 

export default  ResturantCard; 