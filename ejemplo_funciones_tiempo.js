
// setTimeout(function() {
//   console.log("paso un segundo");
// }, 1000);

// var segundos = 0;
//
// var intervalo = setInterval(function() {
//
//   segundos ++;
//
//   console.log( "seg", segundos );
//
//   if( segundos === 3 ) {
//       clearInterval( intervalo );
//   }
//
// }, 1000);


var diego = {
  nombre: "Diego",
  edad: 31,
  imprimir: function() {

    var self = this;

    setTimeout(function() {
      console.log( self );
      console.log( self.nombre, self.edad );
    }, 1000);
  }
}

diego.imprimir();
