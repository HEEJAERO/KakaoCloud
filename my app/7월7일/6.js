function Person(name){
    this.name = name;
}
const me = new Person('홍길동');

const parent = {
    sayHello(){
        console.log('안녕하세요');
    }
}

Object.setPrototypeOf(me,parent);

console.log(me.__proto__ === Person.prototype); // false
// 이런식으로 상위 프로토타입을 바꾸는것도 가능하다( 상속관계를 동적으로 변경)