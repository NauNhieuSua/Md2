import {Shape} from "./Shape";
class Triangle extends Shape {
    private _side1: number;
    private _side2 : number;
    private _side3 : number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }

    getPerimeter() {
        if(((this.side1+this.side2)>this.side3) && ((this.side1+this.side3)>this.side2) && ((this.side2+this.side3)>this.side1)) {

            return this.side1 + this.side2 + this.side3
        }
        else {
            return " không phải là 3 cạnh của 1 tam giác"
        }
    }
    getArea() {
        if(((this.side1+this.side2)>this.side3) && ((this.side1+this.side3)>this.side2) && ((this.side2+this.side3)>this.side1)) {
            let p = (this.side1 + this.side2 + this.side3)/2
            let S = Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3))
            return  S
        }
        else {
            return " không phải là 3 cạnh của 1 tam giác"
        }
    }
}
let tg1: Triangle = new Triangle('tg1','red',3,4,5)
console.log(tg1.getArea())