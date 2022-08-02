
var obj = {
    name: '홍길동'
}

console.dir(obj);

function square(number){
    return number * number;
}

console.dir(square);


function foo(f){
    return f(); 
}

function bar(){
    return 'caller:' + bar.caller; 
}
console.log(bar());// caller : null
console.log(foo(bar)); // ()는 함수를 실행하라는 의미 

//생성자함수로 사용할 목적으로 만듬
// 함수 선언문
function Person(name){
    // 생성자함수로 만들어질 instance 가 가지는 property 를 설정
    this.name = name;
}

const person = new Person('홍길동');