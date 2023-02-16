import {Shape1} from "./BT1_Shape";
import {Resizeable} from "./BT1_resize";

export class Rectangle1 extends Shape1 implements Resizeable <string>{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize(phantram: number): string  {
        let newarea:number = this.calculateArea()*phantram/100
        return `diện tích trước khi thay đổi: ${this.calculateArea()}
diện tích sau khi thay đổi: ${newarea}`
    }
}
//
// let Rectangle11: Rectangle1 = new Rectangle1(5,6,'123')
// console.log(Rectangle11.resize(10))

