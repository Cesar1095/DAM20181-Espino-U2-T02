class Alumno{
    public noControl:string;
    public nombre:string;
    public apellidos:string;
    public promedio:number;
    public genero:string;
    public fechaNacimiento:Date;
    public activo:boolean;

    
    constructor(noControl:string,
        nombre:string,
        apellidos:string,
        promedio:number,
        genero:string,
        fechaNacimiento:Date,
        activo:boolean){
        
        this.noControl=noControl;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.promedio=promedio;
        this.genero=genero;
        this.fechaNacimiento=fechaNacimiento;
        this.activo=activo;
    }

    
}

var alumno:Alumno;
var counter=0;
var alumnos:Alumno[]=new Array(10);

function init():void{
    for(var i=0;i<alumnos.length;i++){
        alumnos[i]=new Alumno("","","",0,"",new Date(),false);
    }
}

function mostrar():void{
    for(var i=0;i<alumnos.length;i++){
        if(alumnos[i].activo){
            console.log(`
            noControl: ${alumnos[i].noControl}
            nombre: ${alumnos[i].nombre} 
            apellidos: ${alumnos[i].apellidos} 
            promedio: ${alumnos[i].promedio} 
            genero: ${alumnos[i].genero}
            fecha de nacimiento: ${alumnos[i].fechaNacimiento} 
            activo: ${alumnos[i].activo}`);
        }
    }
}

function agregar(noControl:string,nombre:string,apellidos:string,promedio:number,
    genero:string,fechaNacimiento:Date,activo:boolean):void{
        if(counter<10){
           alumno=new Alumno(noControl,nombre,apellidos,promedio,genero,fechaNacimiento,activo);
           alumnos[counter]=alumno;
           counter++;
        }
       
}

function borrar(noControl:string):void{
    for(var i=0;i<alumnos.length;i++){
        if(alumnos[i].noControl===noControl){
            alumnos[i]=new Alumno("","","",0,"",new Date(),false);
        }
    }
}

function modificar(noControl:string,nombre:string,apellidos:string,promedio:number,
    genero:string,fechaNacimiento:Date,activo:boolean):void{
        for(var i=0;i<alumnos.length;i++){
            if(alumnos[i].noControl==noControl){
                alumnos[i].noControl=noControl;
                alumnos[i].nombre=nombre;
                alumnos[i].apellidos=apellidos;
                alumnos[i].promedio=promedio;
                alumnos[i].genero=genero;
                alumnos[i].fechaNacimiento=fechaNacimiento;
                alumnos[i].activo=activo;
            }
        }
}

init();
agregar("13400402","Cesar Ramses","Espino Serrano",100,"M",new Date(),true);
agregar("13400738","Pepito","Perz",99,"M",new Date,true);
mostrar();
modificar("13400402","Cesar","Espino",80,"M",new Date(),true);
mostrar();
borrar("13400738");
mostrar();

