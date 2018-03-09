var Alumno = /** @class */ (function () {
    function Alumno(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
        this.noControl = noControl;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.promedio = promedio;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.activo = activo;
    }
    return Alumno;
}());
var alumno;
var counter = 0;
var alumnos = new Array(10);
function init() {
    for (var i = 0; i < alumnos.length; i++) {
        alumnos[i] = new Alumno("", "", "", 0, "", new Date(), false);
    }
}
function mostrar() {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].activo) {
            console.log("\n            noControl: " + alumnos[i].noControl + "\n            nombre: " + alumnos[i].nombre + " \n            apellidos: " + alumnos[i].apellidos + " \n            promedio: " + alumnos[i].promedio + " \n            genero: " + alumnos[i].genero + "\n            fecha de nacimiento: " + alumnos[i].fechaNacimiento + " \n            activo: " + alumnos[i].activo);
        }
    }
}
function agregar(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
    if (counter < 10) {
        alumno = new Alumno(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo);
        alumnos[counter] = alumno;
        counter++;
    }
}
function borrar(noControl) {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].noControl === noControl) {
            alumnos[i] = new Alumno("", "", "", 0, "", new Date(), false);
        }
    }
}
function modificar(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].noControl == noControl) {
            alumnos[i].noControl = noControl;
            alumnos[i].nombre = nombre;
            alumnos[i].apellidos = apellidos;
            alumnos[i].promedio = promedio;
            alumnos[i].genero = genero;
            alumnos[i].fechaNacimiento = fechaNacimiento;
            alumnos[i].activo = activo;
        }
    }
}
init();
agregar("13400402", "Cesar Ramses", "Espino Serrano", 100, "M", new Date(), true);
agregar("13400738", "Pepito", "Perz", 99, "M", new Date, true);
mostrar();
modificar("13400402", "Cesar", "Espino", 80, "M", new Date(), true);
mostrar();
borrar("13400738");
mostrar();
