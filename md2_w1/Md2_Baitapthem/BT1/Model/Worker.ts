import {JobTitle,Sex} from "./JobTitle";
// export type Level = 1|2|3|4|5|6|7|8|9|10
export class Worker extends JobTitle {
    private _level :  number

    constructor(ID: number, fullname: string, age: number, sex: Sex, address: string, level: number) {
        super(ID, fullname, age, sex, address);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}