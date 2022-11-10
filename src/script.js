var array = []
array = document.getElementsByClassName('PrzyciskiDzialania');
var wynik = document.getElementById('wynik');
var c = 0;

array[0].addEventListener('click',()=>{
    var a = document.getElementById('LiczbaA').value;
    var b = document.getElementById('LiczbaB').value;
    var c = Number(a) + Number(b)
    wynik.innerHTML = `Wynik to ${c}`
})

array[1].addEventListener('click',()=>{
    var a = document.getElementById('LiczbaA').value;
    var b = document.getElementById('LiczbaB').value;
    var c =a-b
    wynik.innerHTML = "Wynik to " +  c
    // console.log(c)
})

array[2].addEventListener('click',()=>{
    var a = document.getElementById('LiczbaA').value;
    var b = document.getElementById('LiczbaB').value;
    var c = a*b
    wynik.innerHTML = `Wynik to ${c}`
})

array[3].addEventListener('click',()=>{
    var a = document.getElementById('LiczbaA').value;
    var b = document.getElementById('LiczbaB').value;
    var c = a/b
    wynik.innerHTML = `Wynik to ${c}`
})

array[4].addEventListener('click',()=>{
    var a = document.getElementById('LiczbaA').value;
    var b = document.getElementById('LiczbaB').value;
    var c = Math.pow(a,b)
    wynik.innerHTML = `Wynik to ${c}`
})

