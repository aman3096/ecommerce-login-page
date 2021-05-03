import React,{ useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import './Login.css';


const Login=({})=>{
    const [userId, setUserId] = useState("");
    const [pass, setPass] = useState("");
    const [datas, setDatas] = useState();

    const [data, setData] = useState();
    const [loginStatus, setLoginStatus] = useState(false);

    const [token, setToken] = useState();
    const [redirect, setRedirect] = useState();

    async function handleSubmit(e)
    {
        e.preventDefault();
        const newData = {
          username: userId,
          password: pass
        };
       axios.post("https://inventory-dev-295903.appspot.com/users/login/",newData)
        .then(res=>{
          setData(res.data)
          setToken(res.data.token)
          if(!res.data.token){
            setLoginStatus(false);
          }
          else{
            setLoginStatus(true);
          }
          console.log("token is the", res.data);
        })
        .catch(err=>{
          console.log(err)
        })
        setRedirect(true)
       getData();
        
      }
       function getData(){
        axios.get('https://inventory-dev-295903.appspot.com/products/', {params: {Token: token} })
        .then(res=>{
          setDatas(res.data)
          console.log("Data is the", res.data);
        })
        .catch(err=>{
          console.log(err)
        })
      } 
      console.log("token", token)
      console.log("login status",loginStatus);
      console.log("datas",datas);
      if(redirect){
        <Redirect
        to={{
        pathname: "/",
        state: { token: token }
      }}
    />
      }

    return(
        <div>
        <form onSubmit={handleSubmit}>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control col-sm-6 col-md-8" id="inputEmail3" placeholder="Email"  value={userId} onChange={(e)=>setUserId(e.target.value)}/>
    </div>
    </div>
    <div className="form-group row">
    <label htmlFor="inputPass" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
        <input type="password" className="form-control col-sm-6 col-md-8" id="inputPass" placeholder="Password"  value={pass} onChange={(e)=>setPass(e.target.value)}/>
        </div>
    </div>
 
  <div className="form-group row">
    <div className="col-sm-6 col-md-4">
      {JSON.stringify(userId)} {JSON.stringify(pass)}
      <button type="submit" className="btn btn-primary">Sign in</button>
      {!loginStatus &&<span className="text-danger">Kindly enter credentials</span>}
      

    </div>
  </div>
</form>
  <div className="offset-2 row">
  {loginStatus &&(<Welcome token={token}/>)}
  </div>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;