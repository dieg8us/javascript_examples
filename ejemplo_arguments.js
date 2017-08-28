
function mifuncion(a, b, c, d){
  // console.log( arguments );
  // console.log( 30 + undefined );
  if( arguments.length !== 4 ){
    console.error( "La funcion necesita 4 parametros!" );
    return;

  }

  console.log(a + b + c + d);
}

mifuncion(10, 20, 30);
mifuncion(10, 20, 30, 40);
