

var arr = [
  true,
  {
    nombre:"Diego",
    apellido: "Uribe"
  },
  function(){
    console.log("Estoy viviendo en un arreglo!");
  },
  function( persona ){
    console.log( persona.nombre + " " + persona.apellido );
  },
  [
    "Diego",
    "Uribe",
    "Segura",
    "Prueba",
    [
      "Juan",
      "Pedro",
      "Gabriel",
      function(){
        console.log( this );
      }
    ]
  ]
];

console.log( arr );
console.log( arr[0] );
console.log( arr[1].nombre + " " + arr[1].apellido );
console.log( arr[4][4][1] );

arr[2]();
arr[3]( arr[1] );
console.log( arr[4][2] );

var arr2 = arr[4][4];
arr2[1] = "Pedra!";

console.log( arr2 );
console.log( arr );
arr2[3]();
