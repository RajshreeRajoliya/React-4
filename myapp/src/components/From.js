import React from 'react'
import { useState } from 'react';

function From() {

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
        //    if(Object.keys(errors).length === 0){
        //     alert("Submitted")
        //    } else {

        //     setErrors(errors)
        //    }

        if(errors.length === 0){
alert("err")
        } else {
          setErrors(errors)
        }
    }
// function validate(values){
//     let errors = {}
//     let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
// if(!values.username){
//     errors.username = "Username must not be empty"
// }

// if(!regex.test(values.email)){
//     errors.email = "Email must not be empty"
// } 

// if(!values.password){
//     errors.password = "Password must not be empty"
// }else if(values.password.length < 8){
//     errors.password = "Password must be at least 8 characters"
// }

// return errors
// }


function validate(values){
  let errors = {}

  if(!values.username){
    errors.username = "Enter username"
  }
return errors

}
   
  return (
    
   <form onSubmit={handleSubmit}>
    <label>Enter Username : </label>
    <input name = "username" placeholder='Enter Username' value={formData.username} onChange={handleInput} />
    {/* <p>{errors.username}</p> */}
    <p>{errors.username}</p>
  <br/><br/><br/>

  <label>Enter Email : </label>
    <input name = "email" placeholder='Enter Email'  value={formData.email} onChange={handleInput} />
    {/* <p>{errors.email}</p> */}
  <br/><br/><br/>


  <label>Enter  Password : </label>
    <input name ="password" placeholder='Enter Password'  value={formData.password} onChange={handleInput} />
    {/* <p>{errors.password}</p> */}
  <br/><br/><br/>

  <button type='submit'>Submit</button>

   </form>
 
  )
}

export default From
