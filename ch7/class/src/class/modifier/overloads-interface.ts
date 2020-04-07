// 인터페이스에 정의한 메서드를 구현 클래스에서 오버로딩함
interface IPoint {
    getX(x: any): any;
}
class Point implements IPoint {
    getX(x?: number | string): any {
        if (typeof x === "number") {
            return x;
        } else if (typeof x === "string") {
            return x;
        }
    }
}

let p = new Point();
console.log(p.getX());
console.log(p.getX("hello"));
console.log(p.getX(123));