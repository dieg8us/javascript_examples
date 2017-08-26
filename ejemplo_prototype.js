
// Ejemplo Prototype

// funcion de primera clase
function Persona() {
  this.nombre = "Diego";
  this.apellido = "Uribe";
  this.edad = 30;
  this.pais = "Chile";

}

// ejemplo
Persona.prototype.imprimirInfo = function() {
  console.log( this.nombre + " " + this.apellido + "(" + this.edad + ")");
}

var diego = new Persona;

console.log( diego );
diego.imprimirInfo();

Number.prototype.esPositivo = function() {
  if ( this > 0 ){
    return true;
  } else {
    return false;
  }
}
