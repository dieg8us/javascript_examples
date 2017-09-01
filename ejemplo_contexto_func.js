
function crearFunciones(){

  var arr = [];
  var numero = 1;

  for( var numero = 1; numero <=5; numero++){
    // crear nuevo contexto
    arr.push(
      // funcion anonima que recibe como parametro
      // numero
      (function(numero){
        // regresa otra funcion
        return function(){
          console.log( numero );
        }
      })(numero)

    );
  }

  return arr;
}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();
