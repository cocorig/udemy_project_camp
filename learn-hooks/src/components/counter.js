import React, { useState } from 'react';

const Counter = () => {

    const [cnt , setCnt] = useState(0);



    const onClick =  () => {
        setCnt((cnt) => cnt + 1)
    }
    return (
        <div>
             <h1>Counter : {cnt}</h1>
             <button onClick={onClick}>Plus</button>
        
        </div>
    );
};

export default Counter;