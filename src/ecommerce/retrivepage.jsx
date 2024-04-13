import React, { useEffect, useRef, useState } from "react";
import "./retrivepage.css";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

let Retrivepage=()=>{
  let [indata,setIndata]=useState({
    fname:'',
    email:''
    }) 
    let[err,setErr]=useState({})
 
    const fnameRef=useRef('')
    const emailRef=useRef('')
 
    const fnamevalue=fnameRef.current.value
    const emailvalue=emailRef.current.value
 
    let validation=()=>{
    let error={}
    if(indata.fname==''){
    error.fnames='username cannot be blank'
    fnameRef.current.style.borderColor='orange';
    }
    if(indata.email==''){
     
    error.emails='EmailId cannot be blank'
    emailRef.current.style.borderColor='orange';
    }
    return error;
    }
    let handlechange=(e)=>{
    setIndata({...indata,[e.target.name]:e.target.value})
    }
    let handlesubmit=(e)=>{
    e.preventDefault();
    setErr(validation(indata))
    }
    useEffect(()=>{
    if(Object.keys(err).length===0 && indata.fname!=='' && indata.email!==''){
    setIndata({fname:'', email:''})
    }
    },[err])
 
return(
    <>
    <div className="container">
     <div className="fullcontent"> 
     <h4 className="heading"><FontAwesomeIcon className='fakey' icon={faKey} style={{color: "#ffffff",}}/>Retrieve Password</h4>
   <p className="para">Enter the Username and E-mail ID to receive instructions for resetting your Password</p>
   <input ref={fnameRef} className='rin' type='text' name='name' placeholder='Username' onChange={handlechange} value={indata.fname}/>
   <p className='err'>{err.fnames}</p>
   <input ref={emailRef} className='rin' type='text' name='email' placeholder='Email Id' onChange={handlechange} value={indata.email}/><FontAwesomeIcon className="eicon" icon={faEnvelope} />
   <p className='err'>{err.emails}</p>
   <div>
    <a className="backtologin" href="">back To Login <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}}/></a>
   <button className="sendbut" onClick={handlesubmit}><FontAwesomeIcon className="bulb" icon={faLightbulb} style={{color: "#ffffff",}} />Send Me</button>
   </div>

    </div>
    </div> 
    
     
    </>
)
}
export default Retrivepage; 