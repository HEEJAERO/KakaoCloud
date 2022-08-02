//'use strict'; // 일반적으로 scope 단위에 적용되기 떄문에 함수단위로 사용하는것이 적절

const person = {
    name:'Lee'
};

// 객체가 확장이 가능한지 
console.log(Object.isExtensible(person)); // true
person.age=30;
console.log(person); //{ name: 'Lee', age: 30 }

Object.preventExtensions(person);
person.address = '서울';
console.log(person); // 위에서 Extension 을 금지. 그대로 { name: 'Lee', age: 30 }, error 는 안터짐(strict 모드 사용시에는 error)

Object.seal(person);
delete person.name;
console.log(person); 

Object.freeze(person);
person.name = '아이유';
console.log(person);

console.log(Object.isSealed(person));
console.log(Object.isFrozen(person));