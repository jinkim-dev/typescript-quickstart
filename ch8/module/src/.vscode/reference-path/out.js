// car1.ts 파일
var Car;
(function (Car) {
    Car.auto = false;
})(Car || (Car = {}));
/// <reference path="car1.ts" />
var Car;
(function (Car) {
    var wheels;
    console.log(Car.auto);
    var Taxi = /** @class */ (function () {
        function Taxi() {
        }
        return Taxi;
    }());
})(Car || (Car = {}));
console.log(Car.auto);
// console.log(Car.wheels);     // 접근불가
