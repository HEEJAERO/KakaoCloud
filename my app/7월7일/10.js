var obj = {}; // 전역코드

function myFunc(){ // 이 함수 선언문 또한 전역코드
    console.log('Hello'); // 함수내에 사용된 코드 -> 함수코드
    // inner function( nested code );
    function sayHello(){ 
        console.log('하이'); // sayHello의 함수 코드 => 위의 함수코드와는 별도의 함수 코드 
    }
}

myFunc(); //전역코드