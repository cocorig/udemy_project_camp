'use strict';




// const manu1 =  document.getElementById('manu1');
// const money1 = document.getElementById('money1');
// const manu2 =  document.getElementById('manu2');
// const money2 = document.getElementById('money2');
// const cart1 = document.getElementById('cart1');
 // const cart2 = document.getElementById('cart2');
// const cartContents = document.getElementById('cartContents');






// cart1.addEventListener('click',() =>{

//     cartContents.innerHTML += `${manu1.innerHTML} - ${money1.innerHTML}<br>`;

// });

// cart2.addEventListener('click',() =>{

//     cartContents.innerHTML += `${manu2.innerHTML} - ${money2.innerHTML}<br>`;
// });


const btn = document.querySelectorAll('.btn'); //  버튼을 다 가져와라
const cartContents = document.getElementById('cartContents'); //여기다 넣어줄꺼임! ul>li

function addToCart(name,price) {

    const cartItem =  document.createElement('li');
    cartItem.textContent =  `${name} - ${price}`; //<li>커피 - 5500원<li>
    cartContents.appendChild(cartItem);

}

btn.forEach((btn)=> {
    btn.addEventListener('click',()=>{
    const ProductName = btn.previousElementSibling.previousElementSibling.textContent;
    const ProductPrice = btn.previousElementSibling.textContent;
    addToCart(ProductName,ProductPrice);
    });
});