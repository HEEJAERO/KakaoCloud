// 함수 표현식
// 우리가 지금까지 배웠던 prototype 들의 관계를 코드로 알아보자
var foo = function() {};

console.log(foo.__proto__ === Function.prototype); // true                  


console.log(foo.prototype.__proto__ === Object.prototype); // true

console.log(Object.prototype.__proto__); // null

console.log(foo.constructor ===Function); //true

console.log(Object === window.Object); // true  => 전역객체가 브라우저 환경과 노드 환경이 다르므로 이 경우에는 브라우저 에서 확인하자

console.log(Object.__proto__); //{ [native code] } -> Object 객체 위로 가면 native code 로 나온다 -> 사실상 Object가 최상단... 

