
function determinaDato( a ){

  if( a === undefined ){
    console.log("a es undefined...");
  }

  if(typeof a === "number"){
    console.log("a es un numero y puedo hacer operaciones con numeros");
  }

  if(typeof a === "string"){
    console.log("a es un string y puedo hacer operaciones con textos");
  }

  if(typeof a === "object"){
    console.log("a es un objeto y puedo hacer cualquier cosa");

    if( a instanceof Number){
      console.log("a es un objeto Numerico");
    }
  }
}

// cuando se declara una variable queda como objeto
var b = new Number(3);

console.log( b );

determinaDato( 1 );
determinaDato("texto");
determinaDato({
  nombre: "Diego",
  apellido: "Uribe"
});
determinaDato( b );
