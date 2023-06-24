const getData =  document.querySelector('#Data');



function Data(){
    const data =  new Date();
  const getday = ()=>{
    if(data.getDay() === 0){
        return 'Sun'
    }
    if(data.getDay() === 1){
        return 'Mon'
    }
    if(data.getDay() === 2){
        return 'Tue'
    }
    if(data.getDay() === 3){
        return 'Wed'
    }
    if(data.getDay() === 4){
        return 'Thu'
    }
    if(data.getDay() === 5){
        return 'Fri'
    }
    if(data.getDay() === 6){
        return 'Sat'
    }
  }
    getData.innerText = `${data.getMonth()+ 1 } 월 ${data.getDate()}일 ${getday()}`;

}

Data()