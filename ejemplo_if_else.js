
var nota = 59;

if( nota > 60 ) {
  console.log("A");
} else if ( nota >= 80 ) {
  console.log("B");
} else if ( nota >= 70 ) {
  console.log("C");
} else if ( nota >= 60 ) {
  console.log("D");
} else {
  if( nota < 50 ) {
    console.log("-F");
  } else {
    console.log("+F");
  }
}

var a = 10;
var b = 20;

var c = ( a > b )? a : b;

var d = ( a > b )? function() {
  console.log( "A es mayor que B");
  return a;
}() : function() {
  console.log( "B es mayor que A" );
  return b;
}();

// evaluar valor
var f = 10;
var g = undefined;

var h = f || b;

function getNombre( nombre ) {

  var nomb = nombre || null || "<sin apellido>";

  console.log( nomb );
}

console.log( c );
console.log( d );
console.log( h );

getNombre();

console.log("Termino el codigo.");
