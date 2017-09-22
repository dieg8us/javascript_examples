


var objetoJS = {
  nombre: "Diego",
  edad: 31
};

console.log( "Objeto literal ", objetoJS );

var jsonString = JSON.stringify( objetoJS );

console.log( jsonString );

var objetoDesdeJson = JSON.parse( jsonString );

console.log( objetoDesdeJson );
