import {Shape1} from "./BT1_Shape";
import {Resizeable} from "./BT1_resize";

export class Circle extends Shape1 implements Resizeable <number>{
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(phantram: number): number {
        let newarea = this.calculateArea()*phantram/100
        return newarea
    }
}

let Circle11: Circle = new Circle('huyền ảo', 5)
console.log(Circle11.resize(50))