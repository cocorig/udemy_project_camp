`use strict';`

const btn =  document.querySelector('.btn');
const content =  document.querySelector('.content');
const username = document.getElementById('user');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    const user = username.value;
    const message = text.value;
    addChating(user,message);
    username.value = '';
    text.value = '';
});

function addChating(user,message) {

    const chating =  document.createElement('li');
    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = user;
    usernameSpan.classList.add('username');
    chating.appendChild(usernameSpan);
    chating.appendChild(document.createTextNode(` : ${message}`));
    content.appendChild(chating);
    console.log(content);
}

{/* <ul class="content">
    <li>
       <span class="username">이하연</span>
        " : 안녕"
    </li> 
</ul> */}