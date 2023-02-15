import {Point2d} from "./Point2D";

class Point3d extends Point2d {
    private _Z: number

    constructor(X: number, Y: number, z: number) {
        super(X, Y);
        this._Z = z;
    }
    get Z(): number {
        return this._Z;
    }

    set Z(value: number) {
        this._Z = value;
    }

    getXYZ():object{
        return [
            this.X,
            this.Y,
            this.Z
    ]
    }
    setXYZ(x,y,z){
        this.X =x
        this.Y =y
        this.Z =z
    }
}

let Point3d1 = new Point3d(4,5,6)

Point3d1.setXYZ(1,2,3)
console.log(Point3d1.getXYZ())