`use strict';`



const todo = document.querySelector('.todo'); //내가 입력할  부분
const addBtn = document.querySelector('.addTodoBtn'); //누르면 todobox 생성
const todobox = document.querySelector('.todobox'); //박스와 내가입력한 부분 + 삭제버튼 넣을 박스


addBtn.addEventListener('click',()=>{
    const Todo = todo.value;
    if(Todo){ //입력했을때만 추가되게
        addTodo(Todo);
        todo.value = '';
        console.log(Todo);
    }
   
} );


function addTodo(Todo) {


    const li = document.createElement('li');
    const dleBtn = document.createElement('button');
    dleBtn.classList.add('delete');
    li.classList.add('todoText');
    dleBtn.textContent = '삭제';
    li.textContent = Todo;
    todobox.appendChild(li);
    li.appendChild(dleBtn);
   
    console.log(todobox);

    dleBtn.addEventListener('click',(e)=>{
        console.log(e.target) //button태그를 가리킴
        const removeTag = e.target.parentElement; // 해당 버튼의 부모요소인 li태그를 가리킴
        removeTag.remove(); // 부모요소인 li태그를 삭제.
    })

}


