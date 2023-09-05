let first = document.querySelector('.first');
let second = document.querySelector('.second');
let select = document.querySelector('#select');
let btn = document.querySelector('.btn');


btn.addEventListener('click',function(){
    let operator = select.value;
    if(operator == '<'){
        if(Number(first.value) < Number(second.value)){
            alert('second number is gratter than first 1');
        }else{
            alert('not ok');
        }
    }else if(operator == '>'){
        if(Number(first.value) > Number(second.value)){
            alert('second number is gratter than first 2');
        }else{
            alert('not ok');
        }
    }else if(operator == '='){
        if(Number(first.value) == Number(second.value)){
            alert('second number is gratter than first 3 ');
        }else{
            alert('not ok');
        }
    }else{ 
        alert('Something Wrong');
    }
})

