export class Skill {
    id:number;
    tipo: string;
    nombre:string;
    porcentaje: number;

    constructor(tipo: string, nombre: string, porcentaje: number){
        this.tipo = tipo;
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

}
