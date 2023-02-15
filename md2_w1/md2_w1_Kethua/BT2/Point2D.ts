export class Point2d {
    private _X:number;
    private _Y:number;
    constructor(X: number, Y: number) {
        this._X = X;
        this._Y = Y;
    }

    get X(): number {
        return this._X;
    }

    set X(value: number) {
        this._X = value;
    }

    get Y(): number {
        return this._Y;
    }

    set Y(value: number) {
        this._Y = value;
    }

    getXY():object{
        return  [
            this.X,
            this.Y
        ]

    }
    setXY(x:number,y:number):void {
        this.X = x;
        this.Y = y;
    }
}

