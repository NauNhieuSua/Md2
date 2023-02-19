
export class Student {
    private _identificationNumber : number;
    private _name: string;
    private _address : string;
    private _priority: number;

    constructor(identificationNumber: number, name: string, address: string, priority: number) {
        this._identificationNumber = identificationNumber;
        this._name = name;
        this._address = address;
        this._priority = priority;
    }

    get identificationNumber(): number {
        return this._identificationNumber;
    }

    set identificationNumber(value: number) {
        this._identificationNumber = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get priority(): number {
        return this._priority;
    }

    set priority(value: number) {
        this._priority = value;
    }
}