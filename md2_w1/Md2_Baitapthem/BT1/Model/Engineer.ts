import {JobTitle,Sex} from "./JobTitle";

export class Engineer extends JobTitle {
    private _TrainingIndustry : string


    constructor(ID: number, fullname: string, age: number, sex: Sex, address: string, TrainingIndustry: string) {
        super(ID, fullname, age, sex, address);
        this._TrainingIndustry = TrainingIndustry;
    }

    get TrainingIndustry(): string {
        return this._TrainingIndustry;
    }

    set TrainingIndustry(value: string) {
        this._TrainingIndustry = value;
    }
}