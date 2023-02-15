import {Cricle} from "./Cricle";

class Cylinder extends Cricle {
    private _chieucao: number;
    constructor(chieucao:number,radius:number,color:string) {
        super(radius,color);
        this._chieucao = chieucao

    }
    get chieucao(): number {
        return this._chieucao;
    }
    set chieucao(value: number) {
        this._chieucao = value;
    }

     get thetich(){
        return this.area*this.chieucao
    }

    get areaCylinder (){
        return this.chuvi*this.chieucao
    }
}

let Cylinder1: Cylinder = new Cylinder(5,4,'red')
let Cylinder2: Cylinder = new Cylinder(6,3,'blue')
console.log(Cylinder1.thetich)
console.log(Cylinder1.areaCylinder)
console.log(`Thể tích: ${Cylinder2.thetich} ; diện tích: ${Cylinder2.areaCylinder}`)
