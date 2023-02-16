import {CanBo} from "./CanBo";

type gioitinh = "Nam"| "Nữ" | "Khác"
export class KySu extends CanBo {
    private _nganhDaotao : string
    constructor(name:string,age:number,male:gioitinh,address:string,nganhdaotao:string) {
        super(name,age,male,address);
        this._nganhDaotao = nganhdaotao
    }

    get nganhDaotao(): string {
        return this._nganhDaotao;
    }

    set nganhDaotao(value: string) {
        this._nganhDaotao = value;
    }
}