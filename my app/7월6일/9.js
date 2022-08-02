
// 생성자 함수
// function Circle(radius){
//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2*this.radius;
//     }
// }
// const circle1 = new Circle(5);
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter === circle2.getDiameter); 
// 같은것을 사용하고 있니? => 다르게 만들어짐 즉 같은 메서드를 인스턴스마다 각각 가지고 있음 
// => 메모리 낭비, 시스템 효율이 떨어짐 
// 이것을 해결하기 위해 하나의 공유된 공간(자바스크립트의 경우 프로토 타입 객체) 을 사용하도록 하는것이 좋다 -> 이것을 프로토타입 객체기반으로 상속을 구현하여 해결하였다.
// 효율적으로 바꾼 코드는 다음과 같다.

function Circle(radius){
    this.radius = radius;
    //공용 함수
    Circle.prototype.getDiameter = function(){
        return 2*this.radius;
    }
    // 공용 변수
    Circle.prototype.name ='홍길동';
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter === circle2.getDiameter);  // true

console.log(circle1.name, circle2.name);
//circle1.name ='아이유';
// 현재 circle1 객체에는 name property 가 없다. 따라서 name 프로퍼티를 추가해 준다.
// 따라서 circle1 의 name 만 바뀌게 된다.(없으면 프로토타입으로 가서 해당 객체의 프로퍼티를 바꾸는것이 아니다! 자바와 다르다 주의하자)
// 두개다 바꾸려면 아래 두가지 방법을 사용하자
Circle.prototype.name ='아이유';
circle1.__proto__.name = '아이유';
console.log(circle1.name, circle2.name);
// 자바스크립트는 런타임에 상속관계를 바꿀수 있다는 유연성이 있다(어떤면에서는 위험하다.)