//14.js 의 문제 해결 
// 즉시실행함수와 클로저를 통해.. 
const increase =(function(){
    let num = 0;
    return function(){
        return ++num;
    }
}())

console.log(increase());
console.log(increase());
console.log(increase());
// 증가 감수
// 객체를 리턴 -> 객체안에 함수를 넣어서 여러개의 함수를 리턴 -> 즉 함수가 포함되어있는것이 리턴되면됨
const counter = (function(){
    let num = 0;
    return{
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    }
}())

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());

