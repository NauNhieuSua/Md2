class application {
    private name: string;
static count:number = 0

    constructor(name:string) {
        this.name = name;
        application.count++;
    }
}

console.log(application.count)

let app1 = new application("Tran")
console.log(application.count)

let app2 = new application("Ly")
console.log(application.count)


