// 매개변수로 전달된 객체 리터럴을 type 에일리어싱 하기
let emotion: { readonly name: string } = { name: "sad" };

function aliasing(pEmotion: { name: string }) {
    pEmotion.name = "happy";
}

console.log(emotion.name);      // sad
// emotion.name = "happy";      // 에러
aliasing(emotion);
console.log(emotion.name);      // happy