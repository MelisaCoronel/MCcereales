//BARRA NAVEGADORA ANIMADA
var nav = document.getElementById('main-nav');
var menu = document.getElementById('menu');
menu.addEventListener('click', function () {
  'use strict';
  nav.classList.toggle('mostrar');
});


// CAMBIO DE COLOR DE FONDO
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

// CALCULO DE PRECIO
document.querySelector('#calcular2').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n11').value);
    const n2 = parseInt(document.querySelector('#n22').value);
    const op2 = document.querySelector('#op').value;
    let r;
    if(op2 == '+'){
        r = n1 + n2;
    }else if( op2 == '-'){
        r = n1 - n2;
    }else if(op2 == '*'){
        r = n1 * n2;
    }else if(op2 == '/'){
        r = n1 / n2;
    }
    document.querySelector('#r2').innerHTML = r;
});