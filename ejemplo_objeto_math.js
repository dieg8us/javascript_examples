

var PI = Math.PI;
var E = Math.E;

console.log( PI );
console.log( E );

var num1 = 10.456789;

console.log( num1 );
console.log( Math.round( num1 ));
// redondear dos decimales
console.log( Math.round( num1*100 ) / 100);
// redondear 3 decimales
console.log( Math.round( num1*1000 ) / 1000);

// funcion floor (valor enteor sin redondear)
console.log( Math.floor( num1 ));

// funcion random
var rnd = Math.random()
console.log( rnd );

// funcion random entre dos valores
function randomEntre( min, max){
  return Math.floor( Math.random() * (max-min + 1) + min);
}

console.log( randomEntre(500, 1000) );

// raiz cuadrada
console.log( Math.sqrt(356) );

// exponentes
console.log( Math.pow(7, 3) ); 
