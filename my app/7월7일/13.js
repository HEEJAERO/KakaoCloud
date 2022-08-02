// 클로저가 아닌 함수의 예...
// function foo(){
//     const x = 1;
//     const y = 2;
//     function bar(){ // 이 경우에는 내부함수에서 외부함수의 변수를 참조하고 있지 않기떄문에 클로저라고 할 수 없다.
//         const z = 3;
//         console.log(z);
//     }
//     return bar;
// }
// const bar = foo();
// bar();
function foo(){
    const x = 1;
    const y = 2;
    function bar(){ 
        const z = 3;
        console.log(x);
    }
    bar();// 내부함수의 생명주기가 외부함수보다 짧고(4번 위반) 리턴값또한 없다(2번 위반)
}
const bar = foo();
bar();