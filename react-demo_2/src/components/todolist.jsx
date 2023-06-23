import React,{useState} from "react";

function TodoList(){
//js부분 
   
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleUsernameChange = (e)=>{
        setTodo(e.target.value);
        
    }
  

    const handleSubmit = (e)=>{ //제출했을때 
        e.preventDefault();  
        setTodoList([...todoList, todo]);
        setTodo(' ');
        console.log(todoList);
         //todo 배열리스트 => 화면에 뿌려주기
  
    }; 
    //todoList.push(todo) 대신 setTodoList([...todoList, todo])를 사용하여 새로운 할 일을 추가해야 합니다. React에서 상태를 업데이트할 때에는 직접적으로 값을 변경하지 말고, 이전 상태를 기반으로 새로운 상태를 생성하는 것이 권장됩니다.

        return ( //html부분 

            <div> 
            <h1>Todo-List</h1> 
                <form onSubmit={handleSubmit}>
                    <input type="text" name="todo" id="todo" placeholder="할 일을 입력하세요." onChange={handleUsernameChange}  value={todo}/>

                    <button type="submit">추가</button>
                </form>
                <ul>
                    {todoList.map((todo,key)=>(
                    <li key={key}>{todo}</li>
                    ))}
                </ul> 
            </div>
            )
    }





export default TodoList;