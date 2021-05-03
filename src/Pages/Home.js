import React, {useEffect} from 'react';
import axios from "axios"
export default function Home(props) {


  // useEffect(()=>{
  //   (
  //     async ()=> {
  //       axios.get(`https://inventory-dev-295903.appspot.com/users/login/`)
  //       .then(res=>{
  //         setToken(res.data.token)
  //         console.log("token is the", res.data.token);
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })
  //     }
  //   )();  
  // })
  return(
    <div>Home {JSON.stringify(props.location.state)}</div>
  );
}