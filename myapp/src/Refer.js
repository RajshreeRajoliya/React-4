// import React, {Fragment, useRef} from 'react'; 

// function Refer() { 

// // Creating a ref object using useRef hook 
// const focusPoint = useRef(null); 
// const onClickHandler = () => { 
// 	focusPoint.current.value = 
// 	"The quick brown fox jumps over the lazy dog"; 
// 	focusPoint.current.focus(); 
// }; 
// return ( 
// 	<Fragment> 
// 	<div> 
// 		<button onClick={onClickHandler}> 
// 		ACTION 
// 		</button> 
// 	</div> 
// 	<label> 
// 	Click on the action button to 
// 	focus and populate the text. 
// 	</label><br/> 
// 	<textarea ref={focusPoint} /> 
// 	</Fragment> 
// ); 
// }; 

// export default Refer;




import React from "react";
import { useRef,Fragment } from "react";

function Refer(){
   const focusPoint = useRef(null) 
   function handleInput(){
    focusPoint.current.value = "MAGIC SHOW"
    focusPoint.current.value()
   }
 
return(
    <Fragment>

<h1>WANT TO SEE A MAGIC TRICK</h1>
<button onClick={handleInput}>ACTION</button>
<br/>
<textarea ref = {focusPoint}/>
    </Fragment>
)


}

export default Refer