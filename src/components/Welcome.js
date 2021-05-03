import React, {useEffect, useState} from "react";
import axios from "axios";

const Welcome=({token})=>{
    const yourConfig = {
        headers: {
           Authorization: "Token " + token
        }
     }
     
    const [data, setData]= useState([]);
    const [present,setPresent]= useState(false);  
    const [searchText, setSearchText] = useState("")
    const handleSearch =(e)=>{
        e.preventDefault();
        console.log("Searching items will be be done here in later updates");
    }
    useEffect(()=>{
    (
      async ()=> {
        axios.get('https://inventory-dev-295903.appspot.com/products/', yourConfig)
        .then(res=>{
          setData(res.data.results)
          console.log("Data is the", res.data);
          setPresent(true)
        })
        .catch(err=>{
          console.log(err)
        })
      }
    )();  
  })
    return(
        <div className="row">
            Welcome User
            <form onSubmit={handleSearch}>
            <input type="text" name="search" value={searchText} onChange={(e)=>{setSearchText(e.target.name)}}/>
            <button type="submit" className="btn btn-primary"/>
            </form>
            {/* Infinite scrolling prototype is done in Dashboard using random API */}
            {present && data.map(ele=>(<div className="col-md-4">
                Created Date: {ele.created}
                Image: <img src={ele.image_thumbnail} alt="image thumbnail of product"/>
                Name: {ele.name}
                SKU: {ele.sku}
                In_stock: {ele.in_stock}
                Unit of measure: {ele.uom}
                {ele.is_archived}
                </div>))}
        </div>
    )
}
export default Welcome;