// 객체 리터럴을 이용한 객체 생성
const person1 = {}; 
console.dir(person1);

// 생성자 함수를 이용한 객체 생성
// => instance   (생성자 함수를 통해 만들어진 객체)
const person2 = Object('hi');  

console.dir(person2);

//두개가 생성 메커니즘이 살짝 다름

var tmp = String(true); // 이 경우에는 Primitive value를 반환해주고
console.log(typeof tmp);
console.log(tmp);

tmp = new String(true); // 이 경우에는 String 객체 그 자체를 반환해준다.
console.log(typeof tmp);
console.log(tmp);

