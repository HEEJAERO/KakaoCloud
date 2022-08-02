// 생성자 함수의 이름 식별자는 PascalCase(이름 맨 앞글자가 대문자..)
function Person(){

}
const person1 = Person();
console.log(person1); // undefined

const person2 = new Person();
console.log(person2); // 리턴값이 없어도 생성자가 객체의 this 를 바인딩 하여서 this 를 리턴해주기 때문에 생성자 함수는 기본적으로 리턴값을 사용하지 않음 // instance

var person3 = {};
console.log(person3); // 일반객체