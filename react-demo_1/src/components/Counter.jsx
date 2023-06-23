import React,{useState} from "react";

function Counter(){

    const [count,setCount] = useState(0);
    
    const increment = () => {
        setCount((count)=> count+1);
    }
    const decrement = () => {
        setCount((count)=> count-1);
    }
    return (

        <div>
            카운드 : {count}
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )

}

export default Counter;