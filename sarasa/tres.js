function mostrar() {
  let tipoJuguete;
  let origen;
  let precio;
  let respuesta;
  //punto a
  let tipoMasvendido;
  let contMuñeca = 0;
  let contRompecabeza = 0;
  let contPelota = 0;
  // punto b
  let promedioImportados;
  let precioImportadosTotal;
  let contImportados = 0;
  // punto c
  let cantTotalJuguetes = 0;
  // punto d
  let recaudacionTotal = 0;
  // punto e
  let precioRompecabezaBarato;
  let tipoMasBarato;
  let flagRompecabezaBarato = 1;

  do {
    tipoJuguete = prompt(
      "Ingrese el tipo de juguete: (muñeca-rompecabezas-pelota)"
    );
    while (
      tipoJuguete != "muñeca" &&
      tipoJuguete != "rompecabezas" &&
      tipoJuguete != "pelota"
    ) {
      tipoJuguete = prompt(
        "tipo incorrecto. Reingrese un origen valido: (muñeca-rompecabezas-pelota)"
      );
    }
    origen = prompt("Ingrese el origen: (nacional-importado)");
    while (origen != "nacional" && origen != "importado") {
      origen = prompt(
        "origen incorrecto. Reingrese un origen valido: (nacional-importado)"
      );
    }
    precio = parseInt(
      prompt("Ingrese el precio del juguete: ($1000-$5000)")
    );
    while (isNaN(precio) || precio < 1000 || precio > 5000) {
      precio = parseInt(
        prompt("precio incorrecto. Reingrese precio valido: ($1000-$5000)")
      );
    }
    if(tipoJuguete == 'muñeca') {
        contMuñeca++;
    }else if(tipoJuguete == 'rompecabezas'){
      contRompecabeza++;
    }else{
      contPelota++;
    }

    respuesta = prompt("Quiere ingresar otra venta?: ");
  } while (seguir == "si");

  if (contPelota > contMuñeca && contPelota > contRompecabeza) {
    tipoMasvendido = "pelota";
  } else if (contMuñeca >= contPelota && contMuñeca >= contRompecabeza) {
    tipoMasvendido = "muñeca";
  } else {
    tipoMasvendido = "rompecabezas";
  }

  if (origen == "importado") {
    contImportados++;
    precioImportadosTotal = precioImportadosTotal + precio;
    
    promedioImportados = precioImportados / contImportados;
  }


  
  alert(
    "a- El tipo de juguete mas vendido es: " + tipoMasvendido);
  alert(
    "b- El promedio de precio de los juguetes importados es: " + promedioImportados);

  alert("c- La cantidad total de los juguetes es: " + cantTotalJuguetes);

  alert("d- La recaudacion total de los juguetes es: " + recaudacionTotal);



}
