function foo(param1, ...args){ // param1을 제외하고 나머지 인자를 args 를 받음
    console.log(arguments);
    //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } -  유사배열 객체

    console.log(args);
    // [ 1, 2, 3, 4, 5 ] - 진짜 배열
    return args.pop(); // rest parameter 는 배열이기때문에 배열의 메서드들을 사용할 수 있다.
}
var result = foo(1,2,3,4,5);