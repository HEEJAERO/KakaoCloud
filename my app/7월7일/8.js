//'use strict';
function foo(){
    x = 10; // implicit global(묵시적 전역) 
    //=> 선언한게 없으면 window 전역객체에 property 로 붙는다 (전역변수화)
}

foo();

console.log(x); // 10 ?????
//즉시실행함수 -> 함수를 선언하면서 동시에 실행
(function(){
    //non-strict mode
    var let = 10;
    //inner function(nested function)
    function foo(){
        'use strict';//함수별로 따로 지정해서 사용가능
        let = 20;
    }
    foo();
}()) 