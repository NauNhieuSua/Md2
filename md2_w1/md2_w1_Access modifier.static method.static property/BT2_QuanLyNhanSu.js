var Employee = /** @class */ (function () {
    function Employee(id, firstname, lastname, birthday, address, job) {
        this._ID = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._address = address;
        this._birthday = birthday;
        this._job = job;
    }
    Object.defineProperty(Employee.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getbirthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setbirthday", {
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "job", {
        get: function () {
            return this._job;
        },
        set: function (value) {
            this._job = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getID", {
        get: function () {
            return this._ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setID", {
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.Employees = [];
    }
    Object.defineProperty(EmployeeManager.prototype, "getEmployees", {
        get: function () {
            return this.Employees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeManager.prototype, "add", {
        set: function (employee) {
            this.Employees.push(employee);
        },
        enumerable: false,
        configurable: true
    });
    EmployeeManager.prototype["delete"] = function (id) {
        this.Employees.forEach(function (employee, index) {
            if (employee.getID === id) {
                this.Employees.splice(index, 1);
                return this.Employees;
            }
        });
    };
    return EmployeeManager;
}());
var em1 = new Employee(13, "Trần Thị", "Linh", 1997, "Hà Nội", "nhân sự");
var em2 = new Employee(2, "Nguyễn Văn", "Lâm", 1994, "Hải Phòng", "nhân sự");
var nhansu = new EmployeeManager();
nhansu.add = em1;
nhansu.add = em2;
// nhansu.delete(2)
console.log(nhansu.getEmployees);
