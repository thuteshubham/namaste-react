import { CDN_URL } from "../utils/constants";
export const RestCardComponent= (props)=>{
   const {restData}= props;
   const {cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating} = restData?.info;
   const { deliveryTime} = sla
    return (
      <div className="rest-card" style={{
        background: "#f0f0f0"
      }}>
        <img 
        className="rest-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-card" />
        <div>
        <h3 style={{margin: 5}}>{name}</h3>
        <h4 style={{margin: 5}}>{cuisines.join(", ")}</h4>
        <h4 style={{margin: 5}}>{costForTwo}</h4>
        <h4 style={{margin: 5}}>{deliveryTime} mins</h4>
        <h4 style={{margin: 5}}>{avgRating} star</h4>
        </div>
      </div>
    )
  }
  