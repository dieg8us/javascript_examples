
var arr = [5,4,3,2,1];

console.log( arr );

console.log( arr[0], arr[4]);

arr.reverse();

console.log( arr );

// funcion map
// recorre elementos
arr = arr.map( function(elem) {
  // elemento se multiplica * 2
  elem *= elem;
  // se retorna elemento
  return elem;
});

console.log( arr );

// se revierte la multiplicacion
arr = arr.map( Math.sqrt );

console.log( arr );

// funcion join
arr = arr.join("|");

console.log( arr );

// funcion split
arr = arr.split("|");
console.log( arr );

// funcion push (agregar elementos) al final del arreglo
arr.push("6");
console.log( arr );

// funcion unshift (agregar elementos) al principio del arreglo
arr.unshift("0");
console.log( arr );

// convertir a string (mas eficiente pero no se envian parametros)
console.log( arr.toString() );

// extraer ultimo elemento
var elimine = arr.pop();
console.log( arr , elimine);

// se trabaja con la posicion 1 y elimina un elemento de esa posicion
// y se introduce un valor(10)
arr.splice(1, 1, "10");
console.log( arr );

// funcion slice extrae desde una posicion y la cantidad de objetos a extraer
arr = arr.slice(0, 3);
console.log( arr );

// largo del arreglo
console.log( arr.length );
