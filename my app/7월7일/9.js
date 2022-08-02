
var obj = new Object();

var str = 'Hello'; //primitive value // data type : string

str.toUpperCase();// wrapper 객체 생성 -> 연산 수행 후 이후 바로 소멸
str.toLowerCase(); //   wrapper 객체 생성 -> 연산 수행 후 이후 바로 소멸
var strObj = new String('홍길동');


console.log(typeof strObj); //object

console.dir(strObj); // 유사배열객체 


