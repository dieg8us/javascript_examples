
var a = 10.125473;

// funcion tofixed retorna decimales
console.log(
  a.toFixed(2)
);

// funcion de precision
console.log( a );
console.log( a.toPrecision(5) );

a = 10;
a *= 100000000000000000000000000000000000000;
console.log( a );

a *= "f";

var b = new Number("20e");
console.log( b );
console.log( b.valueOf() );

a = a.toString();

// funcion to String convierte numero a String
console.log( a );
