var x = 1; // 전역 scope 의 전역 변수


function foo(){
    var x = 10; // 지역 scope 의 지역변수
    bar();
}

function bar(){
    console.log(x);
}
foo(); // x 값은 뭘로 출력? 1) 선언을 기준으로 스코프? 2) 호출을 기준으로 스코프?
// 대부분의 언어들이 선언을 기준(lexical scope) 를 사용