import {Student} from "./Student";
export  type Block = 'A'|'B'|'C'
export class StudentBlock extends Student {
    private _Block : Block

    constructor(identificationNumber: number, name: string, address: string, priority: number, Block: Block) {
        super(identificationNumber, name, address, priority);
        this._Block = Block;
    }


    get Block(): Block {
        return this._Block;
    }

    set Block(value: Block) {
        this._Block = value;
    }
}

