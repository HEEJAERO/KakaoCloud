var x = 1; // 전역변수

function myFunc(){ // var 는 functional - level scope -> 위의 x 와는 다른 변수이다.
    console.log(x); // 호이스팅또한 함수레벨 스코프로 이루어진다.
    var x = 100;
    console.log(x);
}
myFunc(); 
console.log(x);
