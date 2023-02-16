interface Vatthebay {
    soCanh: number;
    bay(): void
    haCanh():void
}
interface DongVat {
soChan: number;
    an() : string;
}
class Chim implements Vatthebay, DongVat {
    soCanh: number
    soChan : number


    constructor(soCanh: number, soChan: number) {
        this.soCanh = soCanh;
        this.soChan = soChan;
    }

    an(): string {
        return "";
    }
    bay(): void {
    }
    haCanh(): void {
    }
}