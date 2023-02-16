import {Rectangle1} from "./BT1_Retangle";


export class Square1 extends Rectangle1 {
    constructor(name: string,
                width: number) {
        super(width, width, name)
        ;
    }
resize(phantram: number): string {
    return super.resize(phantram);
}
}

let Square11 : Square1 = new Square1("123",6)
// console.log(Square11.calculateArea())
console.log(Square11.resize(70))
