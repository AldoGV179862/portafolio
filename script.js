function saludo()
{
    var nombre;
    nombre=prompt("Escribe tu nombre", "Nombre");
    alert("Hola " +nombre);
}

function sumar()
{
    var num1 = prompt("Ingrese el primer número");
    var num2 = prompt("Ingrese el segundo número");
    var resultado = parseInt(num1) + parseInt(num2);
    alert("El resultado es: " + resultado);
}

function restar()
{
    var num1 = prompt("Ingrese el primer número");
    var num2 = prompt("Ingrese el segundo número");
    var resultado = parseInt(num1) - parseInt(num2);
    alert("El resultado es: " + resultado);
}

function multiplicar()
{
    var num1 = prompt("Ingrese el primer número");
    var num2 = prompt("Ingrese el segundo número");
    var resultado = parseInt(num1) * parseInt(num2);
    alert("El resultado es: " + resultado);
}

function dividir()
{
    var num1 = prompt("Ingrese el primer número");
    var num2 = prompt("Ingrese el segundo número");
    var resultado = parseInt(num1) / parseInt(num2);
    alert("El resultado es: " + resultado);
}

function signo()
{
    var num=prompt("Escribe un numero:", "");
    if (parseInt(num)>100)
        alert("Es mayor a 100");
    else
    if (parseInt(num<100))
        alert("Es menor a 100")
}