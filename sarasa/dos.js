function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let nota;
  let edad;
  let MejorPromedioFisica = 0;
  let nombreMejorPromedioFisica = 0;
  let alumnaMasJoven = 0;
  let nombreAlumnaJoven = 0;
  let porcFisica = 0;
  let contFisica = 0;
  let porcQuimica = 0;
  let contQuimica = 0;
  let porcSistemas = 0;
  let contSistemas = 0;
  let contadorTotal = 0;
  let MasMaterias = 0;
  let edadAlumnoMasMat = 0;
  let nombreAlumnoMasMat = 0;

  for (let i = 0; i < 500; i++) {

    nombre = prompt("Ingrese nombre: (3-10 caracteres)");

    carrera = prompt("Ingrese carrera: (quimica-fisica-sistemas)");
    while (
      carrera != "quimica" &&
      carrera != "fisica" &&
      carrera != "sistemas"
    ) {
      carrera = prompt(
        "carrera incorrecta. Reingrese carrera: (quimica-fisica-sistemas)"
      );
    }

    sexo = prompt(
      "Ingrese sexo: (m = masculino - f = femenino - nb = no binario)"
    );
    while (sexo != "m" && sexo != "f" && sexo != "nb") {
      sexo = prompt(
        "Sexo incorrecto. Reingrese sexo: (m = masculino - f = femenino - nb = no binario)"
      );
    }

    cantidadMaterias = prompt("Ingrese cantidad de materias (1-5");
    while (
      isNaN(cantidadMaterias) ||
      (cantidadMaterias < 1 && cantidadMaterias > 5)
    ) {
      cantidadMaterias = prompt(
        "Cantidad incorrecta. Reingrese cantidad de materias (1-5"
      );
    }

    nota = prompt("Ingrese nota promedio del alumno (0-10");
    while (isNaN(nota) || (nota < 0 && nota > 10)) {
      nota = prompt(
        "Nota incorrecta. Reingrese nota promedio del alumno (0-10)"
      );
    }

    edad = parseInt(prompt("Ingrese la edad: (mayor o igual a 12)"));
    while (isNaN(edad) || (edad < 18 && edad > 50)) {
      edad = parseInt(prompt("Edad incorrecta. Reingrese la edad: "));
    }

    if (MejorPromedioFisica == 0 && carrera == "fisica") {
      MejorPromedioFisica = nota;
      nombreMejorPromedioFisica = nombre;
    } else if (MejorPromedioFisica < nota) {
      MejorPromedioFisica = nota;
      nombreMejorPromedioFisica = nombre;
    }

    if (alumnaMasJoven == 0 && sexo == "femenino") {
      alumnaMasJoven = edad;
      nombreAlumnaJoven = nombre;
    } else if (alumnaMasJoven > edad) {
      alumnaMasJoven = edad;
      nombreAlumnaJoven = nombre;
    }

    if (MasMaterias == 0 && carrera != "quimica") {
      MasMaterias = cantidadMaterias;
      edadAlumnoMasMat = edad;
      nombreAlumnoMasMat = nombre;
    } else if (MasMaterias < cantidadMaterias && carrera != "quimica") {
      MasMaterias = cantidadMaterias;
      edadAlumnoMasMat = edad;
      nombreAlumnoMasMat = nombre;
    }

    porcQuimica = (contQuimica * 100) / contadorTotal;
    porcSistemas = (contSistemas * 100) / contadorTotal;
    porcFisica = (contFisica * 100) / contadorTotal;
  } // Fin del for

}
