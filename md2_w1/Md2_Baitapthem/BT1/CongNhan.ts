import {CanBo} from "./CanBo";
type bac = 1|2|3|4|5|6|7|8|9|10
type gioitinh = "Nam"| "Nữ" | "Khác"
export class CongNhan extends CanBo {
    private _level : bac
    constructor(name:string,age:number,male:gioitinh,address:string,level:bac) {
        super(name,age,male,address);
        this._level = level
    }

    get level(): bac {
        return this._level;
    }

    set level(value: bac) {
        this._level = value;
    }
}

