import {CanBo} from "./CanBo";

type gioitinh = "Nam"| "Nữ" | "Khác"
export class NhanVien extends CanBo {
    private _CongViec : string
    constructor(name:string,age:number,male:gioitinh,address:string,CongViec:string) {
        super(name,age,male,address);
        this._CongViec = CongViec
    }

    get CongViec(): string {
        return this._CongViec;
    }

    set CongViec(value: string) {
        this._CongViec = value;
    }
}