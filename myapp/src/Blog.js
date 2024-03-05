import React from "react";

function Blog(props){

    return (
        <>
            <ul>
{props.posts.map((post)=>(


 <li key={post.id}>
<div>
    <h2>{post.title}</h2>
    <img src={post.pic} alt="pic"/>
   
</div>

</li>


))
}

            </ul>
        </>
    )

}
export default Blog