export class Skill {
    id:number;
    tipo: string;
    nombre:string;
    porcentaje: number;
    idPershys: number;

    constructor(tipo: string, nombre: string, porcentaje: number, idPershys: number){
        this.tipo = tipo;
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.idPershys = idPershys;
    }

}
