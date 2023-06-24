const loginForm = document.querySelector('#login-form');
const loginInput =document.querySelector('#login-form input');
const greeting =  document.querySelector('#greeting');
const todolist =  document.querySelector('.todo');
const HIDDEN_CLASSNAME = 'hidden'; 
const USERNAME_KEY = 'username';


function onLoginSubmit(e){
   
    e.preventDefault(); 
    const username = loginInput.value;    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 변수저장!
    paintGreeting(username);   
   
}




///추가한 localStorage 항목을 읽는 법
const savedUsername = localStorage.getItem(USERNAME_KEY); 
const date = new Date();
const hours = date.getHours()

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME) 
    todolist.classList.remove(HIDDEN_CLASSNAME);
    let hello = ' ';
    if(hours >= 6 && hours <= 11){
        hello  = 'Good Morning'
    }else if(hours >= 12 && hours <= 17){
        hello  = 'Good Affternoon'
    } else if(hours >= 18 && hours <= 21){
        hello = 'Good Evenning'
    }else{
        hello = 'Goodnight'
    }
   
    greeting.innerText =  `${hello}, ${username}`;        
}


if(savedUsername === null){ //아무값이 없다면 form태그를 보여줌
    todolist.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit); 
    
}else{ //값이 있다면  h1태그를 보여줌
 
    todolist.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(savedUsername);      
   

}