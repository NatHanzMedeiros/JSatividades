function filtrarNumeros(array) {
    let numeros = [];
    let i = 0;
  
    while (i < array.length) {
      if (typeof array[i] === 'number') {
        numeros.push(array[i]);
      }
      i++;
    }
  
    return numeros;
  }
  
  // Exemplo de uso:
  let elementos = [1, 'a', 2, 'b', 3, 'c'];
  let numeros = filtrarNumeros(elementos);
  console.log(numeros); 