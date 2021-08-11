function mostrar() {
  let nombre;
	let tipo;
	let sangre;
	let edad;
	let sexo;
	let respuesta;

  //punto a 
  let promEdadReptiles = 0; 
	let acumEdadReptiles = 0;
	let contReptiles = 0;
  // punto b
  let edadMascotaJoven;
	let tipoMascotaJoven;
	let sexoMascotaJoven;
  // punto c
  let contAves = 0;
  let contMascotas = 0;
  let porcAves = 0;
	let flagAve = 1;
  // punto d 
  let contMamiferos = 0;
	let mascotaCantidad;
	let contMascotaCantidad = 0;

  do{
    nombre = prompt("Ingrese nombre: (3-10 caracteres)");
    while(nombre.length < 3 || nombre.length > 10){
      nombre = prompt("Nombre invalido. Reingrese nombre: (3-10 caracteres)");
     }
    tipo = prompt("Ingrese tipo: (mamifero-ave-reptil)");
    while(tipo != 'mamifero' && tipo != 'ave' && tipo != 'reptil'){
	  tipo = prompt("tipo incorrecta. Reingrese tipo: (mamifero-ave-reptil)");
     }
     if(tipo == 'reptil'){
      sangre = 'fria';
     }else{ 
    sangre = prompt("Ingrese sangre: (fria-calida)");
    while(sangre != 'fria' && sangre != 'calida'){
      sangre = prompt("sangre incorrecta. Reingrese sangre: (fria-calida)");
     }
     }
    edad = parseInt(prompt("Ingrese la edad: (mayor a 0)"));
    while(isNaN(edad) || edad < 0){
	  edad = parseInt(prompt("Edad incorrecta. Reingrese la edad: "));
     }
    sexo = prompt("Ingrese sexo: (m = macho o h = hembra)");
    while(sexo != 'm' && sexo != 'h'){
	  sexo = prompt("Sexo incorrecto. Reingrese sexo: (m = macho o h = hembra)");
     }

     if(tipo == 'reptile'){
      contReptiles++;
      acumEdadReptiles += edad;
      }else if(tipo == 'ave'){
      contAves++;
      }else{
      contMamiferos++;
      }

        if(edad > edadMascotaJoven){
          edadMascotaJoven = edad;
          tipoMascotaJoven = tipo;
          sexoMascotaJoven = sexo;
        }

        if(flagAve || tipo == 'ave'){
          contAves++;
          flagAve = 0;
       }
       
       contMascotas++;

     respuesta = prompt("Desea ingresar otro registro? ");
    }while(respuesta == 'si');
    ///// Fin del bucle /////

    if(contAves > contMamiferos && contAves > contReptiles){
      mascotaCantidad = 'aves';
      contMascotaCantidad = contAves;
    }else if(contMamiferos >= contAves && contMamiferos > contReptiles){
      mascotaCantidad = 'mamiferos';
      contMascotaCantidad = contMamiferos;
    }else{
      mascotaCantidad = 'reptiles';
      contMascotaCantidad = contReptiles;
    }
    
    porcAves = contAves * 100 / contMascotas;

    if(contReptiles != 0){
      promEdadReptiles = acumEdadReptiles / contReptiles;
    }
    alert("a)-El promedio de edad de los reptiles es: " + promEdadReptiles);
  
    alert("b)-La mascota mas joven tiene: " + edadMascotaJoven + " años, y es de tipo: " + tipoMascotaJoven + " y es de sexo: " + sexoMascotaJoven);
    
    if(flagAve){
      alert("c)-No se ingresaron aves");
    }else{
      alert("c)-El porcentaje de aves es: " + porcAves);
    }

    alert("d)-La mascota de mas cantidad es: " + mascotaCantidad + " con " + contMascotaCantidad + " cantidades");

} // Fin del programa
