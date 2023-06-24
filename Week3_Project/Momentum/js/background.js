


const Morning  = [

    
    'image(1).png',
    'image(2).png',
    'image(3).png',
    
    // background-image: url(/img/image\(3\).png);
]
const Afternoon =[ 
    'afternoon(1).png',
    'afternoon(2).png',
    
]
const Evening = [

    'evening(1).png',
    'evening(2).png'
]
const Night =[
    'night(1).png',
    'night(2).png',
    'night(3).png',
    'night(4).png',
]
// <img src="/img/nigth(2).png" alt="">

const body = document.querySelector('body');
const img =  document.createElement('img');

if (hours >= 6 && hours <= 11) {
    const srcIdx =Morning[Math.floor(Math.random() * Morning.length)];
    img.src = `/img/${srcIdx}`
   

  } else if (hours >= 12 && hours <= 17) {
    const srcIdx = Afternoon[Math.floor(Math.random() * Afternoon.length)];
    img.src = `/img/${srcIdx}`
  

  } else if (hours >= 18 && hours <= 21) {
    const srcIdx =Evening[Math.floor(Math.random() * Evening.length)];
    body.style.backgroundImage = `url(/img/${srcIdx})`;

  } else {
    const srcIdx = Night[Math.floor(Math.random() * Night.length)];
    body.style.backgroundImage = `url(/img/${srcIdx})`;
  
  }
  
  document.body.appendChild(img);
