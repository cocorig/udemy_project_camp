import React from "react";



function Todo(props){
    
    const todos = props.todos;//배열
    console.log(todos);
    return(
      
      <ul>
        {todos.map((todo,key)=>(
          <li key={key}>{todo.text}</li>
        ))}
      </ul> 
    );
}


function Todolist(){
    const todos = [

        {id : 1, text : "실습 복습"},
        {id : 2, text : "리액트 인강듣기"},
        {id : 3, text : "프로그래머스 문제풀기"},
        {id : 4, text : "스터디 카페가기"},
        
    ];
    return(
       <Todo todos={todos}/>
    )
}






export default Todolist;