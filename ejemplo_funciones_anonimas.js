
// funcion anomina siempre en parenteris
(function(){

  var a = 10;

  // valor a antes de funcion
  console.log( a );

  function cambiarA(){
    a = 20;
  }

  cambiarA();

  // valor a despues de funcion
  console.log( a );

})();

// otro ejemplo de funcion anomina

function ejecutarFuncion( fn ){
  // se ejecuta la funcion
  if ( fn() === 1) {
    return true;
  } else {
    return false;
  }

  return true;
}

console.log(
  // se ejecuta funcion y se pasa una funcion anonima como
  // parametro
  ejecutarFuncion(function() {
    console.log( "funcion anónima ejecutada!!!" );
    return 1;
  })
);
