

function identifica( param ) {
  // console.log( typeof param );

  // si el parametro es de tipo funcion
  // se ejcuta
  // if( typeof param == "function" ){
  //   param();
  // } else {
  //   console.log( param );
  // }
  console.log( typeof param );
  console.log( param instanceof Persona);
}

function Persona() {
  this.nombre = "Diego";
  this.edad = 30;
}

var diego = new Persona();

// identifica( 1 );
// identifica( "1" );
// identifica( {} );
identifica( diego );
identifica( "diego" );
// identifica( function(){ console.log("funcion anonima"); } );
