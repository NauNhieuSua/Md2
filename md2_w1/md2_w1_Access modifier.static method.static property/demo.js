var person = {
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
    }
};
person.setName = 'peter';
var person1 = /** @class */ (function () {
    function person1(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Object.defineProperty(person1.prototype, "fullname", {
        get: function () {
            return "".concat(this.firstname + this.lastname);
        },
        enumerable: false,
        configurable: true
    });
    return person1;
}());
var person2 = new person1(10, 3);
console.log(person2.fullname);
