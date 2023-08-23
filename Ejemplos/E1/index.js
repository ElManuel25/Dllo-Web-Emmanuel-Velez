console.log("JUAS JUAS");
console.log("---------------");
const edad = 55;
let nombre = "Juan";
let apellido = "Jose"
const esEstudiante = true;
const altura = 1.70;
const semestres = [];
const materiaPreferida = { nombre: "Calculo", id: 0 }
const universidad = null
const carrera = undefined;

console.log("Tipo de dato de nombre" + typeof (nombre))
const precioMatricula = "5555.555"
console.log("Tipo de dato de precioMatricula " + typeof (precioMatricula))
const precioMatricula2 = parseInt(precioMatricula)
console.log("Tipo de dato de precioMatricula2 " + typeof ([precioMatricula2]))

console.log(`${nombre} ${apellido}`)

console.log("------operador ternario-------")
console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad");

let condition = edad > 18
if (condition) { }
if (condition) { } else { }

const dia = "MARTES"
switch (dia) {
    case "LUNES":
        console.log("LUNES")
        break;
    case "MARTES":
        console.log("MARTES");
        break;
    default:
        console.log("NO ES VALIDO");
        break;
}

console.log("------funciones-------")
function imprimirNombre() {
    console.log(nombre)
}

imprimirNombre();

const imprimirNombreyApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
}

imprimirNombreyApellido(nombre, apellido)

const crearNombreCompleto = (nombre, apellido) => {
    console.log("--GLOBAL SCOPE FAKE--");
    console.log(nombre, apellido);
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + " " + apellido
        console.log(name);
    }
    console.log(name)
}

crearNombreCompleto(nombre, apellido)


//ARRAY
const estudiantes = []
//agregar
//estudiantes.push(5)
//estudiantes.push(null)
//estudiantes.push({})
//estudiantes.push(()=>{console.log();})

estudiantes.push({ "nombre": "Juan", id: 12 })
estudiantes.push({ "nombre": "Samuel", id: 23 })
estudiantes.push({ "nombre": "Juan", id: 34 })
console.log(estudiantes);



estudiantes.forEach((x) =>
    console.log(x.nombre));

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre == "Juan"){
        console.log(estudiantes[i].id)
    }
}

const Juanes = estudiantes.filter(x=>x.nombre == "Juan")
console.log(Juanes);

const Juane = estudiantes.find(x=>x.nombre == "Juan")
console.log(Juane);

let estudiantes2 = estudiantes.map(x => {return{...x, edad:null}})
console.log(estudiantes2)


//JSON (javascript object notation)

jsonEnJavascript();

function jsonEnJavascript(){
    const ciudad = {nombre: "Medellin",
    poblacion: 2.5,
    barrios_count: 31
}

//DESCTRUCTURACIÓN

const { nombre:nombreCiudad } = ciudad

console.log(nombreCiudad);
}





