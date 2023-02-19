import {JobTitle,Sex} from "./JobTitle";

export class Employee extends JobTitle {
    private _Work: string


    constructor(ID: number, fullname: string, age: number, sex: Sex, address: string, Work: string) {
        super(ID, fullname, age, sex, address);
        this._Work = Work;
    }

    get Work(): string {
        return this._Work;
    }

    set Work(value: string) {
        this._Work = value;
    }
}