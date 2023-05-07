export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    proy_url: string;

    constructor(nombre:string, descripcion: string, proy_url:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.proy_url = proy_url;
    }

}
