import React,{useState,useEffect} from "react";

function Timer(){
    
    const [cnt , setCnt] = useState(0);


    useEffect(()=>{

        const timer = setInterval(()=>{
            setCnt((cnt) => cnt + 1)
        },1000);
         
        return ()=>{
        clearInterval(timer)
        }
    },[]);//렌더링될때 딱 한번만
   
   return <p>{cnt}</p>
   
}


export default Timer;