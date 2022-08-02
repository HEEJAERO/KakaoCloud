var myFunc=function add(x,y){
    return x+y;
}
//console.log(add(3,5)); //error! add is not defined
// 함수이름이 외부로 노출되지않아, 함수 내부에서만 사용 가능하다.
// 함수 식별자를 통해 외부에서 사용(식별자 != 이름)
console.log(myFunc(3,5)); 



foo(); // 함수선언문은 선언위에 호출하여도 호출이 가능
//add(); // error.. 이 시점에는 add 는 undefined... -> 즉 함수가 아니라서 error 발생
// 함수 선언문과 함수 표현식의 호이스팅 방식이 다르다는것을 다시 한번 정리 
// 함수선언문
function foo(){
    console.log('foo함수');
}
// ()에 넣으면 함수 표현식 -> 즉 아래의 구문은 함수 리터럴.. 
(function bar(){
    console.log('bar함수');
})
var add = function bar(){
    console.log('bar함수');
}
foo();
//bar();// 사용 불가. 표현식이라 



//자바스크립트 함수의 특징 1. 매개변수의 갯수와 상관없이 식별자만 같으면 호출가능!
function sum(){
    // 함수는 arguments 라는 매개변수를 저장하는 유사배열객체를 가지고 있음 (Array-like Object)
    //length property 를 가지고 배열처럼 인덱스를 이용해서 access 가능, 당연히 순환가능(iterable)
    // 하지만 배열은 아니기떄문에 배열의 메서드들은 사용불가 
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(add(2)); // NaN (2+undefined) 
console.log(sum(2));
console.log(sum(2,3,4));

//IIFE - 함수를 선언과 동시에 실행
(function (){ // 이런식으로() 으로 감싸면 식이 됨 -> 값을 호출 가능 - > 뒤에 () 을 붙이면 즉시 실행
    let x = 10; // 한번만 사용하고 버릴것이기 때문에 익명함수를 주로 사용 
    let y  = 20;

    console.log(x+y);
}())



var x = 100; // 전역변수 -global scope
var y = 200; //

function outer(){
    let x = 0; // 지역변수(function-level scope)
    function inner(){ // 내부함수 - inner function
        let x = 10;
        console.log(y);
    }
}
// 모든 스코프는 chain 으로 연결되어 있음 위의경우 inner(local) scope -> outer(local)scope -> global-scope 순으로 scope 를 이동하면서 y 값을 찾음
// 이런것을 scope chain 이라고 한다.
// 변수를 찾을때 전역변수는 scope chain 의 최상단에 위치해 있기때문에 지역변수보다 속도(성능)가 느리다. *****
outer();

//잘만든 함수가 존재
// 이 함수의 기능을 변경(추가) - 홀수만을 출력하도록 함수를 변경하고 싶음
// 1. 원래 있는 함수를 수정!
// 2. 함수를 새로 추가
// 3. 함수를 추상화 시켜서 인자로 받아서 사용  => 이때 인자로 받는 함수를 콜백함수!
// => 이후 기능을 추가, 변경하는 경우에는 3번을 이용하여 코드를 작성하는것이 좋다.


// 고차함수(higher-Ordered-function) - 함수를 인자로 받는 함수?
function repeat(n,f){
    for(var i =0 ; i<n;i++){
        f(i);     
    }
}
// callback-function
let logAll = function(i){
    console.log(i);
}
let logOdd = function(i){
    if(i%2){
        console.log(i);
    }
}
// function repeat1(n){
//     for(var i =0 ; i<n;i++){
//         if(i%2){
//             console.log(i);
//         }
//     }
// }
repeat(5,logAll);
repeat(5,logOdd);