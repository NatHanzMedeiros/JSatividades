function soma (){
    var numeros = [1,2,3,4,5,6]; 
    var soma = numeros.reduce((contador, elemento) => contador + elemento, 0);
    console.log(soma);
}
soma();