type ROLE = 1 | 2
class User {
    private _name: string;
    private _email: string;
    private _role: ROLE
    static ID : any

    constructor(name: string, email: string, role: ROLE) {
        this._name = name;
        this._email = email;
        this._role = role
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

     getInfo():any {
        return `name: ${this._name}, email: ${this._email}, ID:${User.ID}`
    }

    get role(): ROLE {
        return this._role;
    }

    set role(value: ROLE) {
        this._role = value;
    }

    static isAdmin(user: User){
        if(user.role===1){
            User.ID = 'Admin'
        }else if(user.role===2){
            User.ID = "User"
        }
}
}

let user1 = new User("tran",'haitran@gmail.com',1)
User.isAdmin(user1)
console.log(user1.getInfo())