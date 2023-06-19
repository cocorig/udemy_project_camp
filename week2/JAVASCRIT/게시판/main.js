
'use strict'

//1. 제목괴, 내용을 입력한다.
//2. 버튼을 누른다.
//3.li에 추가된다.
const titles = document.querySelector('.title'); //입력빋을 제목
const contents = document.querySelector('.content'); //입력빋을 내용
const btn = document.querySelector('.btn'); //누르면 추가버튼
const lists = document.querySelector('.lists'); //여기에 추가




btn.addEventListener('click', () =>{
    if(titles && contents){
    const title  = titles.value; //제목
    const content =  contents.value; //내용
    addList(title, content);
    titles.value = '';
    contents.value = '';
    }

});
function addList(title, content) {

    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    li.classList.add('list');
    h2.textContent = `제목: ${title}`;
    p.textContent =`내용: ${content}`;
    li.appendChild(h2);
    li.appendChild(p);
    lists.appendChild(li);
    console.log(lists);
}
