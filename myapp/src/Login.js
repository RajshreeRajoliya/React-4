import React from 'react'
import { useState } from 'react'

function Login(){
  const[isLoggedIn,setLoggedIn] = useState(false)

  function handleOut(){
    setLoggedIn(false)
  }

  function handleIn(){
    setLoggedIn(true)
  }
  return(
    <>

{ isLoggedIn ?
 ( <div>
  <h1>Welcome User</h1>
  <button onClick={handleOut}>Log Out</button>
</div>) :


(<div>
  <h1>Please log In</h1>
  <button onClick={handleIn}>Log In</button>
</div>)
}
    </>
  )
}

export default Login