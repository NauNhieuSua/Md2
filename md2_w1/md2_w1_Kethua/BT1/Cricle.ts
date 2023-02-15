export class Cricle {
    private _radius: number;
    private _color: string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get area(){
        return this._radius*this._radius*Math.PI
    }
    get chuvi (){
        return this.radius*2*Math.PI
    }
}


