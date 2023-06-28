import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'


const About = ()=>{
    const navigator =  useNavigate()
    const [search,setSearch] = useState('');
    
    const onChange = (e)=>{
        setSearch(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        navigator(`search?query=${search}`);//search?query=%EC%A0%9C%EC%A3%BC%EB%8F%84
    }

    console.log(search)
return(
    <div>
    <h1>About</h1>
    <form onSubmit={onSubmit}>
        <input type='text' value={search} onChange={onChange} placeholder='여행가고 싶은 지역'></input>
        <button type='submit'>검색</button>
    </form>
    </div>

)
    
}

export default About;