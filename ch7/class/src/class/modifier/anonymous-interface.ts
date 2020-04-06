// 인터페이스 익명 함수 타입 정의하기
interface IFormat {
    (data: string, toUpper?: boolean): string;
}
let format: IFormat = function (str: string, isUpper: boolean) {
    if(isUpper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};
console.log(format("1 : Happy!"));
console.log(format("1 : Happy!", true));
console.log(format("1 : Happy!", false));