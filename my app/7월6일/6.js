function foo(){

}
foo.myName = '홍길동';
foo.getName = function(){
    console.log(this);
}

foo(); // 함수호출
new foo(); // 생성자 함수 호출
foo.getName(); // method 호출  
// => 함수또한 객체이기때문에 이런식으로 다양한 표현이 가능하다.