import React,{useState} from "react";

function Login(){
//js부분 
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);


    const handleUsernameChange = (e)=>{
        setUsername(e.target.value);
        
    }
  
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
        
    }
    console.log(username,password);

    const handleSubmit = (e)=>{
        e.preventDefault();  
        
        if(username === 'admin' && password === '1234'){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }

        setUsername(' ');
        setPassword(' ');
        
    };

    if(isLoggedIn){
        return <h1>로그인 성공</h1>
    }else{
        return ( //html부분 

            <div> 
            <h1>Login</h1> 
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" placeholder="아이디"  required  onChange={handleUsernameChange} value={username}/>
                    <input type="password" name="password" id="password" placeholder="비밀번호"onChange={handlePasswordChange}value={password} required/>
                    <button type="submit">Login</button>
                </form>
            </div>
            )
    }

    
}



export default Login;