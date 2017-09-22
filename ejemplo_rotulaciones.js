

for_principal:
for( var i = 1; i <= 5; i++ ) {

  console.log("i", i);

  for_secundario:
  for( var j = 1; j <= 5; i++ ) {

    console.log("j" , j);

    // continue for_principal

    for( var x = 1; x <= 5; i++ ) {

      console.log("x", x);

      // break for_secundario;
      break for_principal;
    }
  }
}
