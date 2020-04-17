// 접근자를 통해 객체의 속성에 접근
class Student {
    name: string;
    birthYear: number;
}

let student = new Student();

// 속성값 설정
student.name = "happy";
student.birthYear = 2017;

// 속성값 읽기
console.log(student.name);
console.log(student.birthYear);