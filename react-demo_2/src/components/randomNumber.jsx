import React from 'react';




function Number({number}){
    console.log(number);
   return (
    <div>
        <h1>숫자 랜덤 생성기</h1>
        <h2>{number}</h2>
        <h3>min:</h3>
        <h3>max:</h3>
    </div>
   )
}

function RandomNumber(){ //숫자를 랜덤으러 생성해서 그 숫자를 props로!
  let num = Math.floor(Math.random() * 100) //1~100
   console.log(num)
    return <Number number={num} />
}   

export default RandomNumber; 