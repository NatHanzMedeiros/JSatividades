function ListaSegundoMaior() {
    var numeros = [1, 2, 3, 4, 5, 6];
    var maior = null;
    var segundoMaior = null;
  
    numeros.forEach(function(numero) {
      if (numero > maior) {
        segundoMaior = maior;
        maior = numero;
      } else if (numero < maior && (segundoMaior === null || numero > segundoMaior)) {
        segundoMaior = numero;
      }
    });
  
    return segundoMaior;
  }
  
  var segundoMaiorNumero = ListaSegundoMaior();
  console.log(segundoMaiorNumero);