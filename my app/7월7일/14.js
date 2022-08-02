let num = 0;
// 이런식으로 전역 변수를 선언하게 되면 어디서든 접근할 수 있게 되어 보안상 문제가 생길수 있음 //객체지향의 정보은닉
// 하지만 함수안의 지역변수로 선언하게 되면 아래 함수에서는 함수호출할떄마다 변수가 초기화되는 문제가 생김
// 이러한 문제를 클로저를 통해 해결 
const increase = function(){
    return ++num;
}

console.log(increase());
console.log(increase());
console.log(increase());