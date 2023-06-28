import React, { useState } from 'react';

const useForm = (initialValues) => {
   // {name: '', email: ''}을 받아서 상태관리
    const [values, setValues] = useState(initialValues)

    const handleChange = (e)=>{
        console.log(e.target)
        const {name, value} = e.target;//이벤트 객체에서 name과 value를 추출하여 현재 폼 상태를 업데이트
        setValues((prevValues)=> ({...prevValues, [name]: value}));//이전 값들을 다 저장시키기위해
    }
    console.log(values)
    const resetFrom = () =>{
        setValues(initialValues);
    }
    return (
       {values,handleChange,resetFrom}
    );
};

//values:현재 상태값들을 담고 있는 객체.
//handleChange: 폼 요소의 변경 이벤트를 처리하는 함수.
//resetFrom: 폼을 초기 상태로 재설정하는 함수.
export default useForm;