// function modoC(){
//     let elemento=document.getElementById('cont-general');
//     elemento.style.backgroundColor = 'white';
// }

// const modo= document .querySelector('.modo');
// modo.addEventListener("click",function;cambiarColor);

// function cambiarTema() {
//     let body = document.querySelector('body');
    
//     if (body.classList.contains('light')) {
//         body.classList.remove('light');
//         body.classList.add('dark');
//     } else {
//         body.classList.remove('dark');
//         body.classList.add('light');
//     }
// }
// const neumorphism = document.getElementById("neumorphism");

// neumorphism.style.backgroundColor = "#effcc796";
// neumorphism.style.border = "1px solid #f197e2";
// neumorphism.style.boxShadow = "5px 5px 15px #f197e2, -5px -5px 15px #befef9";
// neumorphism.style.padding = "10px 20px";

// document.getElementById('cambiarEstilo').addEventListener('click', function() {
//     document.getElementById('miEnlace').href = 'css/style.css';
// });

let estiloActual = 'style.css';

document.getElementById('cambiarEstilo').addEventListener('click', function() {
    if (estiloActual === 'style.css') {
        document.getElementById('miEnlace').href = 'css/style_dark.css';
        estiloActual = 'style_dark.css';
    } else {
        document.getElementById('miEnlace').href = 'css/style.css';
        estiloActual = 'style.css';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.querySelector('.num');
    const botones = document.querySelectorAll('.btn');
    const botonesOperacion = document.querySelectorAll('.btn1');

    let operacionActual = '';
    let operacionAnterior = '';
    let operacion = undefined;

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            agregarNumero(boton.innerText);
        });
    });

    botonesOperacion.forEach((boton) => {
        boton.addEventListener('click', () => {
            realizarOperacion(boton.innerText);
        });
    });

    function agregarNumero(numero) {
        operacionActual = operacionActual.toString() + numero.toString();
        actualizarDisplay();
    }

    function realizarOperacion(op) {
        if (operacionActual === '') return;
        if (operacionAnterior !== '') {
            calcular();
        }
        operacion = op;
        operacionAnterior = operacionActual;
        operacionActual = '';
    }

    function calcular() {
        let resultado;
        const anterior = parseFloat(operacionAnterior);
        const actual = parseFloat(operacionActual);
        if (isNaN(anterior) || isNaN(actual)) return;
        switch (operacion) {
            case '+':
                resultado = anterior + actual;
                break;
            case '-':
                resultado = anterior - actual;
                break;
            case '*':
                resultado = anterior * actual;
                break;
            case '/':
                resultado = anterior / actual;
                break;
            default:
                return;
        }
        operacionActual = resultado;
        operacion = undefined;
        operacionAnterior = '';
        actualizarDisplay();
    }

    function actualizarDisplay() {
        pantalla.value = operacionActual;
    }

});
