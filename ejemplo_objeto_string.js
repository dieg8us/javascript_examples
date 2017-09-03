
var a = new String("Diego Uribe");

console.log( a );

var b = "Uribee";

// funcion toUpperCase
console.log( b.toUpperCase() );

// funcion toLowerCase
console.log( b.toLowerCase() );

// funcion indexOf
var i = b.indexOf("e");
console.log( "la letra e esta: ", i);

// funcion lastIndexOf
i = b.lastIndexOf("e");
console.log( "la letra e esta: ", i);

// funcion substring
var nombre = a.substr( 0, a.indexOf(" ") );
console.log( nombre );

// funcion split
// separa texto y lo convierte en un arreglo
var split = a.split(" ");
console.log( split );
console.log( split.length );
