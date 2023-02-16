
type gioitinh = "Nam"| "Nữ" | "Khác"
export class CanBo {
    private _name: string;
    private _age: number
    private _male: gioitinh
    private _address: string;


    constructor(name: string, age: number, male: gioitinh, address: string) {
        this._name = name;
        this._age = age;
        this._male = male;
        this._address = address;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get male(): gioitinh {
        return this._male;
    }

    set male(value: gioitinh) {
        this._male = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}