

// for( var i = 0; i <= 10; i++) {
//
//   if( i == 5 ){
//     continue;
//   }
//
//   console.log( i );
//
// }

var Persona = function() {
  this.nombre = "Diego";
  this.apellido = "Uribe";
  this.edad = 31;
}

var diego = new Persona();

Persona.prototype.direccion = "La Florida";

for( prop in diego ) {

  // console.log( diego.hasOwnProperty( prop ));

  // if( !diego.hasOwnProperty( prop ) ) {
  //   continue;
  // }

  if( diego.hasOwnProperty( prop ) ) {
    continue;
  }

  console.log( prop, ":", diego[prop] );

}

for( num in [ 1,2,3,4,5,6,7,8,9,10 ]) {
  // indice num
  console.log( num );
}

// forEach arreglos
[ 1,2,true,4,5,6,7,false,9,"prueba" ].forEach(function(val) {
  console.log( val );
});
