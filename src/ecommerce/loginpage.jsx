import React, { useEffect, useRef, useState } from 'react';
import "./login.css"
import logoimg from "./images/logo.png"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import{faLock}from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

let Loginpage=()=>{
  
   let [data,setData]=useState({
   name:'',
   password:''
   }) 
   let[err,setErr]=useState({})

   const nameRef=useRef('')
   const passRef=useRef('')

   const namevalue=nameRef.current.value
   const passvalue=passRef.current.value

   let validation=()=>{
   let error={}
   if(data.name==''){
   error.names='username cannot be blank'
   nameRef.current.style.borderColor='orange';
   }
   if(data.password==''){
    
   error.pass='password cannot be blank'
   passRef.current.style.borderColor='orange';
   }
   return error;
   }
   let handlechange=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
   }
   let handlesubmit=(e)=>{
   e.preventDefault();
   setErr(validation(data))
   }
   useEffect(()=>{
   if(Object.keys(err).length===0 && data.name!=='' && data.password!==''){
   setData({name:'', password:''})
   }
   },[err])
return(
    <>
    <div className='container'>
     <div className='loginform'>
        <div className='loginlogo'>
        <img src={logoimg} alt='vozitrail'/>
        </div>
        <div className='loginsetup'>
         <span className='signup'><FontAwesomeIcon className='fauser' icon={faUser} />Sign In</span>
         <input ref={nameRef} className='in' type='text' name='name' placeholder='Username' onChange={handlechange} value={data.name}/><FontAwesomeIcon className='user' icon={faUser} />
         <p className='err'>{err.names}</p>
         <input ref={passRef} className='in' type='text' name='password' placeholder='Password' onChange={handlechange} value={data.password}/><FontAwesomeIcon className='lock'icon={faLock} />
         <p className='err'>{err.pass}</p>
         <div id='borderdiv'>
            <p id='border'></p>
             </div>
          <div>
            <a href="#"className='forgotmyPassword'><FontAwesomeIcon className='arrowleft' icon={faArrowLeft} />I forgot my Password</a>
            <button className='securelogin' onClick={handlesubmit} ><FontAwesomeIcon className='fakey' icon={faKey} style={{color: "#ffffff",}}/>Secure Login</button>
        </div>   
        </div>
        <a href='#' className='kg'>Powered By KG Hawes, LLC</a>
        </div>
        <div>
        </div>
     </div>
    
     
    </>
)
}
export default Loginpage;