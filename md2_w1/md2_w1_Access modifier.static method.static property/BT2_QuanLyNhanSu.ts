

class Employee{
    private _ID: number
    private _firstname: string;
    private _lastname:string;
    private _birthday: number;
    private _address: string;
    private _job: string
    constructor(id:number,firstname:string, lastname:string, birthday:number, address: string, job:string) {
        this._ID = id
    this._firstname = firstname;
    this._lastname = lastname;
    this. _address = address;
    this._birthday= birthday;
    this._job = job
    }
    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get getbirthday(): number {
        return this._birthday;
    }

    set setbirthday(value: number) {
        this._birthday = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }


    get getID(): number {
        return this._ID;
    }

    set setID(value: number) {
        this._ID = value;
    }

    get getinfo(){
        return this
    }
}

class EmployeeManager{
    private Employees :Employee[] = []

    constructor( ) {
    }

    get getEmployees(){
        return this.Employees
    }

    set add(employee:Employee){
        this.Employees.push(employee)
    }

     set deleteEmployee(id:number){
       this.Employees.forEach((employee:Employee,index)=>{
           if(employee.getID===id){
               this.Employees.splice(index,1);
               return this.Employees;
           }
       })
    }

    editEmployee(id:number,newemployee:Employee){
        this.Employees.forEach((employee,index)=>{
            if(employee.getID===id){
                this.Employees.splice(index,1,newemployee);
                return this.Employees;
            }
        })
    }
}

let em1 = new Employee(13,"Tr???n Th???","Linh", 1997, "H?? N???i", "nh??n s???")
let em2 = new Employee(2,"Nguy???n V??n","L??m", 1994, "H???i Ph??ng", "nh??n s???")
let em3= new Employee(4,"Nguy???n Th???","?????nh", 1999, "Qu???ng Ninh", "nh??n s???")
let nhansu = new EmployeeManager()
nhansu.add = em1
nhansu.add = em2
nhansu.editEmployee(13,em3)
console.log(nhansu.getEmployees)


