function Operaciones(){

    var a =0;
    var b =0;
    var suma = 0;
var resta = 0;
var multiplicación =0;
var división =0;
prompt("Operaciones matemáticas con 2 números")
    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));
    suma = a+b;
    resta = a-b;
    multiplicación = a*b;
    división = a/b;

    alert("El resultado de la suma es: "+suma);
    alert("El resultado de la resta es: "+resta);
    alert("El resultado de la multiplicación  es: "+multiplicación);
    alert("El resultado de la división  es: "+división );

}
function NumeroMayor(){
var números  = 0;
var mayor =0;
var contador =1;
alert("Ingrese 2 número  para definir el mayor")
for(let i =0;i<=2;i++){
    números= parseInt(prompt("Ingrese el "+contador+ " número "));
if (números >mayor){
mayor=números
contador++;
}
}
alert("El número  mayor ingresado es: "+mayor);
}
function NumeroMenor(){
    var numeros = 0;
    var menor =0;
    var contador =2;
    alert("Ingrese 3 números para definir el menor")
    menor = parseInt(prompt("Ingrese el 1 número "));
    for(let i =0;i<=1;i++){
    numeros= parseInt(prompt("Ingrese el "+contador+ " número "));
    if ( menor>numeros){
    menor=numeros
    contador++;
    }
}
    alert("El número  menor ingresado es: "+menor);
}

function ParImpar(){
    var numero = 0;
    alert("Ingrese 1 número  para definir si es par o imapar")
    numero= parseInt(prompt("Ingrese el número "));
if (numero%2 ==0){
    alert("El número  ingresado es par");
}else{
    alert("El número  ingresado es impar");
}
    
}

function ElCuadradoDeUnNumero(){
    var numero = 0;
    var R=0;
    alert("Definir el cuadrado de un número ")
    numero= parseInt(prompt("Ingrese el número "));
R = numero*numero;
    alert("El cuadrado del número  ingresado es: "+R);
}
function AreaDeltriangulo(){
    var base = 0;
    var altura =0;
    var area =0;
    alert("Definir el área de un triángulo")
    base= parseInt(prompt("Ingrese la base del  triángulo"));
    altura = parseInt(prompt("Ingrese la altura del triángulo"));
area = base*altura/2
    alert("El área del triángulo es: "+area+" m2");   
}

function MetroCentimetros(){
    var m = 0;
    var cm =0;
    alert("Convertir metros a centimetros")
    m= parseFloat(prompt("Ingrese los metros"));
    cm =m*100/1
    alert("El resultado es "+cm+" cm");   
}
function AñoNacimiento(){
    var edad = 0;
    var añoActual =0;
    var año = 0;

    alert("Definir el año de nacimiento")
    edad = parseInt(prompt("Ingresa tu edad"));
    añoActual= parseInt(prompt("Ingrese el año actual"));
   año= añoActual-edad
    alert("El año de nacimiento es "+año);   
}
function Inversión(){
var capital= 0;
var años =0;
var g= 0;
var ia =0;

alert("Ganancias del dinero invertido")
capital = parseInt(prompt("Ingresa el capital a invertir"));
años= parseInt(prompt("Ingrese el año de inversión"));
c = años*12
ia = 0.017*c/100
g = capital*ia*12
g = g+capital
alert("El total de la ganancia con de capital invertido es: "+g);
}   
function Colegio(){
    var notas= 0,p=0,c=1,suma=0;
    
    alert("Calcular porcentaje de notas de un estudiante")
    for(let i =0;i<=4;i++){
    notas = parseInt(prompt("Ingresa la "+c+" nota"))
    suma = suma+notas
    c++
    }
    p = suma/5
    if (p>3 ){
        alert("El alumno aprobó con "+p);
    }else{
        alert("El alumno reprobó con "+p)
    }

    
    }  
    function Fruteria(){ 
        var k= 0;
        var t= 0;
var d =0;
        alert("Descuento en compra de frutas según kilogramos")
        k = parseInt(prompt("Ingrese los kilos"))
        t = 4500*k
    if(k>=3){

    }else{
        alert("No tiene descuento")
    }
        if(k>=3 && k <=5){
            d=t*10/100
            t=t-d
            alert("El total con descuento es "+t)
    }if
        ( k>=6 && k<=10){
        d=t*15/100
    t=t-d
        alert("El total con descuento es "+t)
    }
    if (k >= 11){
    d=t*20/100
    t=t-d
    alert("El total con descuento es "+t)
        
      
    }
}
