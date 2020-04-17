// 객체 리터럴에서 Get과 Set을 이용한 값 읽기와 값 설정
var obj = {
    set name(name) {
        this.myName = name;
    },
    get name() {
        return this.myName;
    },
    myName: ""
}

obj.name = "happy"  // setter
console.log(obj.name);  // getter