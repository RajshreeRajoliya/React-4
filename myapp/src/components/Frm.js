import React from 'react'
import { useState } from 'react';

function Frm() {

const[formData , setformData] = useState({
    username : "",
    email : "",
    password : ""

})
const[errors , setErrors] = useState({})



function handleInput(e){
    const{name , value} = e.target
    setformData({
        ...formData,
        [name] : value
    })

}



    function handleSubmit(e){
        e.preventDefault();
        
            console.log("Form Data:", formData);
     const errors = validate(formData)
     if(errors.length === 0){
        alert("Form Data")
     } else {
        setErrors(errors)
     }
    }

function validate(values){
    let errors = {}
    if(!values.username){
        values.username = "Enter Valid Name"
    }

    if(!values.email){
        values.email = "Enter Valid email"
    }

    if(!values.password){
        values.password = "Enter Valid password"
    }
    return errors
}
  
   
  return (
    
   <form onSubmit={handleSubmit}>
    <label>Enter Username : </label>
    <input name = "username" placeholder='Enter Username' value={formData.username} onChange={handleInput} />
<p>{errors.username}</p>
  <br/><br/><br/>

  <label>Enter Email : </label>
    <input name = "email" placeholder='Enter Email'  value={formData.email} onChange={handleInput} />
    <p>{errors.email}</p>
  <br/><br/><br/>


  <label>Enter  Password : </label>
    <input name ="password" placeholder='Enter Password'  value={formData.password} onChange={handleInput} />
    <p>{errors.paassword}</p>
  <br/><br/><br/>

  <button type='submit'>Submit</button>

   </form>
 
  )
}

export default Frm
