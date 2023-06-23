import React ,{useState}from "react";

const Toggle =()=>{

    const [isOn, setIsOn] = useState(false); //isOn 첫 값은 false

    const hadleClick =  ()=>{
        setIsOn(!isOn)
    }
    return (

        <button onClick={hadleClick}>{isOn ? 'ON' : 'OFF'}</button>

    )
}
export default Toggle;