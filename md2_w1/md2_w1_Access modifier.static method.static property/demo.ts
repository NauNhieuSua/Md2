const person = {
     name: "John",
     surname: "Smith",
    get getName() {
        return this.name;
    },
    set setName(name) {
        this.name = name;
    },
    set setSurname(surname) {
          this.surname = surname;
    },
    get getsurname() {
          return this.surname;
    },
};

person.setName = 'peter'

class person1 {
     private firstname: number;
     private lastname: number;
     constructor(firstname:number,lastname:number) {
          this.firstname = firstname
          this.lastname = lastname
     }
     get fullname(){
          return `${this.firstname + this.lastname}`
     }
}

let person2 = new person1( 10,3)
console.log(person2.fullname)