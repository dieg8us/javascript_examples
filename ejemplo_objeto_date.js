

/* inicializar fechas */
var hoy = new Date();
var fMili = new Date(1);
var fFija = new Date(2016, 9, 21, 23, 10, 15);

console.log( hoy );
console.log( fMili );
console.log( fFija );

// funcion getFullYear
console.log( hoy.getFullYear() );

// funcion getDate
console.log( hoy.getDate() );

// funcion getHours
console.log( hoy.getHours() );

// funcion getMilliseconds
console.log( hoy.getMilliseconds() );

// funcion getMonth
console.log( hoy.getMonth() );

// funcion getSeconds
console.log( hoy.getSeconds() );

// funcion getTime
console.log( hoy.getTime() );

var inicio = new Date();

for(var i = 0; i < 15000; i++){
  console.log("ejecutando...");
}

var fin = new Date();

// console.log( "inicio:" + inicio);
// console.log( "fin: " + fin );

var duracion = fin.getTime() - inicio.getTime();
console.log( duracion, "milisegundos" );
console.log( (duracion/1000), "segundos");

// utilizar moment.js
