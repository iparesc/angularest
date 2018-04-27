export class Cancion{

    _id:number;
    _nombre:string;

    constructor(id:number=-1, nombre:string=""){
        this._id=id;
        this._nombre=nombre;
    }
    get id(){
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre:string){
        this._nombre=nombre;

    }
}