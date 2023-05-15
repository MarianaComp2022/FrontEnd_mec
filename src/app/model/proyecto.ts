export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    proy_url: string;
    idPersproy: number;


    constructor(nombre:string, descripcion: string, proy_url:string, idPersproy: number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.proy_url = proy_url;
        this.idPersproy = idPersproy;
    }

}
