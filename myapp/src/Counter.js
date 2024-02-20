import React, { useState } from 'react'

export default function Counter () {
const[state,setState] = useState(0)
    return (
      <div>
        <h1>Your count is {state}</h1>
        <button onClick={()=>setState(state+1)}>CLICK</button>
        {/* onClick={()=>setState(state + 1)} */}
      </div>
    )

}
