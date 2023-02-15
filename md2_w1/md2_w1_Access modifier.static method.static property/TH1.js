var application = /** @class */ (function () {
    function application(name) {
        this.name = name;
        application.count++;
    }
    application.count = 0;
    return application;
}());
console.log(application.count);
var app1 = new application("Tran");
console.log(application.count);
var app2 = new application("Ly");
console.log(application.count);
