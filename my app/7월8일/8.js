class Base{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        return '안녕하세요!';
    }
}

class Derived extends Base{
    // sayHello(){
    //     return 'Hello'; // 오버라이딩 되고 상위 클래스의 메소드는 shadowing 됨
    // }
    sayHello(){
        return super.sayHello() +this.name;
    }
}
// super => 상위 클래스를 참조하는 프로퍼티  super() 상위 클래스의 생성자를 호출하는 함수
const derived = new Derived('홍길동');
console.log(derived.sayHello());