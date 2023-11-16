function carInfo(manufacturer: string, model: string, ...argumentss:object[]):object {
    let car = {};
    car[manufacturer] = manufacturer;
    car[model] = model;

    for (let arg of argumentss) {
        if (typeof arg === "object" && Object.keys(arg).length === 1) {
            let key = Object.keys(arg)[0];
            let value = arg[key];
            car[key] = value;
        }
    }

    return car;
}

let myCar = carInfo("Toyota", "Corolla", { color: "red" }, { feautrue: "sunroof" });
console.log(myCar);
