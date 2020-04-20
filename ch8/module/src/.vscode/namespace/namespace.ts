// 한 파일 내에서 여러 네임스페이스의 선언과 호출
namespace MyInfo1 {
    export let name = "happy";
    export function getName2() {
        return MyInfo2.name2;
    }
}

namespace MyInfo2 {
    export let name2 = "happy2";
    export function getName() {
        return MyInfo1.name;
    }
}

console.log(MyInfo1.getName2());
console.log(MyInfo2.getName());