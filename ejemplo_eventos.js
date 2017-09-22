
document.onmouseup = function() {

  var texto = window.getSelection().toString();

  console.log( texto );
  
}

document.onmousedown = function( arg ) {

  if( arg.button === 2 ) {
    alert("click bloqueado");
    return;
  }

  console.log( "No hay problema." );
}

function evento( arg ) {
  console.log( "me dispare ");
  console.log( arg );
}

var objeto = document.getElementById("objDemo");

objeto.addEventListener("click", evento);

objeto.click();
