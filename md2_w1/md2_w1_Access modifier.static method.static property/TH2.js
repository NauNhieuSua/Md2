var Instructor = /** @class */ (function () {
    function Instructor(name, role) {
        if (role === void 0) { role = "assistant"; }
        this.role = role;
        this.name = name;
    }
    // Instance method
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    // Base case static method
    Instructor.helloWorld = function () {
        console.log('Hi there');
    };
    // Static method
    Instructor.canTeach = function (instructor) {
        return (instructor.role === 'classroom');
    };
    return Instructor;
}());
var juniorInstructor = new Instructor('Brian');
var seniorInstructor = new Instructor('Alice', "classroom");
juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"
Instructor.helloWorld(); // "Hi there"
// "Brian can teach: false"
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor.canTeach(juniorInstructor)));
// "Alice can teach: true"
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor.canTeach(seniorInstructor)));
