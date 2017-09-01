

var a = new Boolean();

console.log( a );

var b = new Boolean("");

console.log( b );

var c = new Boolean("b");

console.log( c );


// se valida debido a que es verdadero (true)
if( true ) {
  console.log( "Se imprimio!!" );
}

// se imprime debido a que valida que solamente sea un objeto
if( a ) {
  console.log( "Se imprimio igual!!!" );
}

a = true;

if( a.valueOf() ) {
  console.log( "valida!!" );
}
