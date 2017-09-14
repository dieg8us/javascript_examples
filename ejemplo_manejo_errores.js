


try {

  throw 1; // cualquier objeto numero, string, objeto
  // se recomienda enviar
  // throw new Error('nombre error');
  // throw {
  //   nombreerror: "Error tipo 2",
  //   accion: "Salir corriendo",
  //   codeerror: 1
  // }

  // throw function(){
  //   console.log("Funcion del throw...");
  // }

  console.log("Esta parte nunca se ejecuta");

} catch (e) {

  registroError( e );
  // e();
  // console.log( e );
  // console.log( e.nombreerror );
  // console.log( e.accion );
  // console.log( e.codeerror );
  console.log( "Parte del catch");


} finally {

  console.log( "finalmente" );

}

function registroError( e ){
  /*
    Se puede registrar el error en una
    base de datos
  */
  var ahora = new Date();

  console.log("Se registro un error: ", e, "a las: ", ahora.getTime());
}
