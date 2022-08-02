// var 의 스코프- 함수 level scope 
var x = 1; // 전역변수

if(true){
    var x = 100;
}

console.log(x); // 100 

var i = 100;
for(var i = 0;i<5;i++){
    console.log(i);
}
console.log(i);