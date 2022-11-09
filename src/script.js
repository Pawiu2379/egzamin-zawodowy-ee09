var array = []
array = document.getElementsByClassName('PrzyciskiDzialania');
var a = document.getElementById('LiczbaA').value;
var b = document.getElementById('LiczbaB').value;

a = Number(a)
b = Number(b)

array[0].addEventListener('click',()=>{
    console.log(a+b)
})

array[1].addEventListener()