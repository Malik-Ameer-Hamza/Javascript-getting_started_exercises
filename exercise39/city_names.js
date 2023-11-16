function city_country(city, country) {
    return "\"".concat(city, ",").concat(country, "\"");
}
console.log(city_country("Sukkur", "Pakistan"));
console.log(city_country("Mumbai", "India"));
console.log(city_country("Beijing", "China"));
