
// Funcion bind

var carro = {
  color: "blanco",
  marca: "mazda",
  imprimir: function(){
    var salida = this.marca + " - " + this.color;
    return salida;
  }
}

var carro2 = {
  color: "rojo",
  marca: "toyota"
}

console.log( carro.imprimir() );

// funcion realiza llamada a funcion de carro
// pero esta no esta presente en el Objeto Global Window
var logCarro = function( arg1, arg2 ){
  console.log( "Carro: ", this.imprimir() );
  console.log( "Argumentos:", arg1, arg2 );
  console.log( "========================");
}

// Se inicializa un nuevo objeto del tipo logCarro
// pero enlazando el objeto carro a logCarro
var logModeloCarro = logCarro.bind( carro );

logModeloCarro( "abc", "xyz" );



// Funcion Call

logModeloCarro.call( carro, "123", "456" );

// Funcion Apply

logModeloCarro.apply( carro, [ "asd", "qwe" ]);

// Funciones prestadas

console.log( carro.imprimir.call( carro2 ) );
