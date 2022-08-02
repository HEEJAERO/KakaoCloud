const obj = {}; // 객체 literal 로 만든 객체

console.log(obj.__proto__.constructor.name);// Object

//객체를 생성하는 방법 
// 객체를 생성할 때 객체의 상위 prototype 객체를 직접 지정할 수 있다. 
const obj1 = Object.create(null); // 이런식으로 지정하면 상위 프로토타입 객체가 없이 객체를 생성할 수 있다.
console.log(obj1.__proto__); //undefined
// 이런경우에 대비하여 __proto__ 를 직접사용하는것이 권장되지않는다.
// ->Object가 가지고 있는 메서드를 활용
console.log(Object.getPrototypeOf(obj1)); // null => 없다는것을 명확하게 알 수 있다.