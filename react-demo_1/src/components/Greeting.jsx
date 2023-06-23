import React from "react";


function Greeting(){

    return (
        <Name  name='하연'/>
     )
   
}

function Name(props){
    
    return <h1>안녕하세요, {props.name}</h1>
    
}
export default Greeting;