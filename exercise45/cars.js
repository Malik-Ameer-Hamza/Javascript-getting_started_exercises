function carInfo(manufacturer, model) {
    var argumentss = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argumentss[_i - 2] = arguments[_i];
    }
    var car = {};
    car[manufacturer] = manufacturer;
    car[model] = model;
    for (var _a = 0, argumentss_1 = argumentss; _a < argumentss_1.length; _a++) {
        var arg = argumentss_1[_a];
        if (typeof arg === "object" && Object.keys(arg).length === 1) {
            var key = Object.keys(arg)[0];
            var value = arg[key];
            car[key] = value;
        }
    }
    return car;
}
var myCar = carInfo("Toyota", "Corolla", { color: "red" }, { feautrue: "sunroof" });
console.log(myCar);
