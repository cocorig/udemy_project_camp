
//커스텀 훅!
import React,{useState} from "react";

function useCounter(initialValue){//초기값을 전달받음
    const [cnt, setCnt] = useState(initialValue);

    const increment =()=>{
        setCnt(cnt + 1);
    }
    return [cnt, increment]//값과 함수를 넘김
}

//뭘 받을지, 뭘 리턴할지 내가 커스텀 함수를 만듬
//()는 html, {}는 js 
//useCounter 훅을 정의하여 초기값을 전달받고, 
//상태와 상태를 변경하는 함수를 반환하도록 구현했.
export default useCounter;