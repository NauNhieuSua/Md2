export type Sex = 'Nam' | ' Nữ' | 'Khác'
export class JobTitle {
    private _ID: number
    private _fullname : string;
    private _age : number
    private _sex : Sex
    private _address: string


    constructor(ID: number, fullname: string, age: number, sex: Sex, address: string) {
        this._ID = ID;
        this._fullname = fullname;
        this._age = age;
        this._sex = sex;
        this._address = address;
    }

    get fullname(): string {
        return this._fullname;
    }

    set fullname(value: string) {
        this._fullname = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get sex(): Sex {
        return this._sex;
    }

    set sex(value: Sex) {
        this._sex = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }


    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }
}