// class define
class Person{
//constructor 가 없을시 자바스크립트 엔진이 default constructor 를 삽입
}   
// 익명 class 표현식
const Person = class{

}
// 기명 class 표현식
const Person2 = class MyClass{}; 
// 자바스크립트에서는 class 접근을 class 명이 아닌 식별자로 접근한다 => 즉 맨위의 선언도 class 명으로 접근하는것이 아닌 식별자를 자바스크립트가 자동으로 만들어줌