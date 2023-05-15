export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    idPersexp: number;

    constructor(nombreExp: string, descripcionExp: string, idPersexp: number){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.idPersexp = idPersexp;
    }


}
