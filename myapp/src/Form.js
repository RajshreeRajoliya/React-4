import React, { useState } from "react";

function Form() {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
  email : ""
  });

const[errors,setErrors] = useState({})

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [name]: value
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
 const errors = validate(formData)
  if(Object.keys(errors).length === 0){
alert("Submitted")
  } else {
    setErrors(errors)
  }
  };
  

  const validate = (values)=>{
    let errors = {}
let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
if(!values.username){
  errors.username = "Please enter a username"
}
if(!values.password){
  errors.password = "Please enter a password"
}
if(!regex.test(values.email)){
  errors.email = "Enter a valid email"
}
return errors

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Name</label>
      <input type="text" name="username" value={formData.username} onChange={handleInput} />
<p>{errors.username}</p>
      <label>Enter Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleInput} />
   <p>{errors.password}</p>
      <label>Enter Email</label>
      <input type="text" name="email" value={formData.password} onChange={handleInput} />
     
      <p>{errors.email}</p>
      <button>Submit</button>
    </form>
  );
}

export default Form;
