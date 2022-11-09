var array = []
array = document.getElementsByClassName('PrzyciskiDzialania');
var a = document.getElementById('LiczbaA').value;
var b = document.getElementById('LiczbaB').value;

a = Number(a)
b = Number(b)

array[0].addEventListener('click',()=>{
    console.log(a+b)
})

array[1].addEventListener('click',()=>{
    console.log(a-b)
})

array[2].addEventListener('click',()=>{
    console.log(a*b)
})

array[3].addEventListener('click',()=>{
    console.log(a/b)
})

array[4].addEventListener('click',()=>{
    for(var i = 0; i == b ; i++){
        a = a*a
    }
    console.log(a)
})