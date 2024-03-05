import { CDN_URL } from "../utils/constants";
export const RestCardComponent= (props)=>{
   const {restData}= props;
   const {cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating} = restData?.info;
   const { deliveryTime} = sla
    return (
      <div className="m-2 p-2 w-[200px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-300" >
        <img 
        className="rounded-lg"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-card" />
        <div >
        <h3 className="font-bold text-lg py-2" style={{margin: 5}}>{name}</h3>
        <h4 style={{margin: 5}}>{cuisines.join(", ")}</h4>
        <h4 style={{margin: 5}}>{costForTwo}</h4>
        <h4 style={{margin: 5}}>{deliveryTime} mins</h4>
        <h4 style={{margin: 5}}>{avgRating} star</h4>
        </div>
      </div>
    )
  }
  

  // higher order Componet 

  // input RestCardComponent in RestCardComponentPrime

  export const  WithPrimeLabel= (RestCardComponent) =>{
    return (props) =>{
      return (
        <div>
          <label className="absolute bg-black text-white m-2 rounded-lg p-1">Prime</label>
          {console.log({...props})}
          <RestCardComponent  {...props}/>
        </div>
      )
    }
  }
