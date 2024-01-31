let numeroMaximo = 10;
let listaNumerosSorteados = [];
let intentos = 1;
let numeroSecreto = 0;

condicionesIniciales();

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles.");
    } else {    
        //Si el número generado está almacenado en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    //=== es una validación más para verificar que sean del mismo valor y tipo de dato, si no retorna false
    //console.log(numeroSecreto === numeroDeUsuario); //Devuelve true or false.
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez!' : 'veces!'}`);
        //obtiene la etiqueta html por el id para remover el atributo disabled
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDeUsuario >numeroSecreto) {
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Ingresa un número entre 1 y ${numeroMaximo}`);
    //Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el botón de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}


/*
function holaMundo() {
    console.log("¡Hola Mundo!");
    return;
}

function holaUsuario(nombre) {
    console.log(`Hola ${nombre}`);
    return;
}

function dobleNumero(numero) {
    return numero*2;
}

function calcularPromedio(numero1,numero2,numero3) {
    return (numero1 + numero2 + numero3)/3;
}

function numeroMayor(numero1, numero2) {
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
}

function numeroSiMismo(numero) {
    return numero * numero;
}
*/



/*
holaUsuario(prompt("Ingrese su nombre"));

let numeroDoble = dobleNumero(prompt("Ingrese un número"));

alert("El doble del número ingresado es: " + numeroDoble);

let promedio = calcularPromedio(
    parseInt(prompt("Digite el primer número para calcular el promedio")),
    parseInt(prompt("Digite el segundo número para calcular el promedio")),
    parseInt(prompt("Digite el tercer número para calcular el promedio"))
);

alert(`El promedio de los números ingresados es ${promedio}`);

let numeroMasGrande = numeroMayor(
    parseInt(prompt("Ingrese el primer número para comparar")),
    parseInt(prompt("Ingrese el segundo número para comparar"))
);

alert(`El número mayor es: ${numeroMasGrande}`);

let numeroMultiplicar = numeroSiMismo(parseInt(prompt("Ingrese un número")));

alert(`El resultado de multiplicar el número ingresado por sí mismo es: ${numeroMultiplicar}`);*/
