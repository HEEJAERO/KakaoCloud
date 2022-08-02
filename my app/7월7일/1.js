function Person(name){
    this.name = name;
}

const person = new Person('홍길동');

console.dir(Person);
console.dir(person);
const obj = {};

const parent = {x:1};

obj.__proto__ = parent; // 상위 prototype 을 parent 로 바꿈

console.log(obj.x);  // 동적으로 상속관계를 바꿔버릴수가 있음 -- 기존의 객체지향언어와의 다른점
