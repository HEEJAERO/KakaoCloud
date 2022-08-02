
// closure 의 예
const x = 1;

function outer(){
    const x = 10;

    const inner = function(){
        console.log(x);
    }
    return inner;
}

const innerFunc = outer(); // 함수가 끝난 시점에서 기존의 프로그래밍언어는 x=10 이 날라감
innerFunc(); // 따라서 전역스코프에서 실행되는 이 함수는 전역으로 선언된 x 값을 가져오는것이 일반적 =>1 
//하지만 10이 출력
//이런 현상이 클로저라고함
// 이런 특징은 lexical enviroment 와 Execution context stack 이 분리되어있어 발생하는 현상
// outer function이 끝나더라도 inner function 은 리턴되어 함수가 살아있어, 그 함수가 선언된 시점에 참조하고 있는 x=10 을 여전히 참조하고 있다.
// 따라서 실행 컨텍스트가 종료되더라도 x 에 대한 참조값이 그대로 남아있다. 따라서 가비지 컬렉터는 해당 lexcial enviroment를 삭제시키지 않는다.
// 따라서 innerFunc 를 실행시키면 여전히 x=10 을 참조하고 있기 때문에 10이 출력된다. 