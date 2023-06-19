function multiplicar(numero1, numero2){
if (numero1 & numero2 < 0){
return "Digite um valor inteiro/positivo";
}

else{ 
var contador = 0;
while(numero1>0){
contador += numero2;
numero1--;
    
}
return contador;
}

}
console.log(multiplicar(5,8));