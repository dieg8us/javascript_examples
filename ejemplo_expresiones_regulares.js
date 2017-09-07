
// la misma funcion
var reg1 = RegExp("a");
var reg2 = /a/;

// i = insensible
// g = todas las apariciones
// m = multilinea

var texto = "Hola 9 Mundo.\nQué tal";
var texto2 = "Aeropuerto";
var texto3 = "La Respuesta de la suma es: 45 + 60 = 105";

console.log( texto );
console.log( texto2 );
console.log( texto3 );

// regresa arreglo o NULL
var arr = texto.match( /^H/ );
var arr2 = texto.match( /o$/);
var arr3 = texto.match( /.../);
var arr4 = texto.match( /^.o/);
var arr5 = texto.match( /[0-9]/ );
var arr6 = texto.match( /[a-zA-Z]/);
var arr7 = texto.match( /^H[a-z]/);
var arr8 = texto.match( /[aeiou].$/)
var arr9 = texto.match( /\s/);
var arr10 = texto.match( /\w/ ); // [a-zA-Z0-9]
var arr11 = texto.match( /\9/ ); // [0-9]
var arr12 = texto.match( /m/i ); // independiente de mayusculas
var arr13 = texto.match( /[aeiou]/g ); // todas las ocurrencias
var arr14 = texto.match( /[aeiou]|é/ig); // multilinea
var arr15 = texto2.match( /[aeiou]{2,2}/ig);
var arr16 = texto2.match( /\w{2,2}/ig);
var arr17 = texto3.match( /\d{1,}|respuesta/ig);

console.log( arr );
console.log( arr2 );
console.log( arr3 );
console.log( arr4 );
console.log( arr5 );
console.log( arr6 );
console.log( arr7 );
console.log( arr8 );
console.log( arr9 );
console.log( arr10 );
console.log( arr11 );
console.log( arr12 );
console.log( arr13 );
console.log( arr14 );
console.log( arr15 );
console.log( arr16 );
console.log( arr17 );
