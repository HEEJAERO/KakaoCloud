// 상위 class(super class)
class foo{

}
// 하위 class(sub class)
class bar extends foo{

}

const obj = new bar();

// super class
class Animal{
    constructor(age,weight){
        this.age = age;
        this.weight = weight;
    }
    eat(){
        return '밥먹자';
    }
    move(){
        return '움직이자';
    }
}

class Bird extends Animal{
    // constructor(...args){// 상위 클래스가 없을때 constructor 를 선언하지 않으면 이러한 코드가 들어가게된다.
    //     super(args); // 상위 클래스의 constructor 를 호출  
    // }
    constructor(age,weight,kk){
        super(age,weight); 
        this.kk = kk; // this 는 반드시 super 뒤에 와야함 => super 가 실행되어야 객체가 만들어 져야 this가 해당 객체를 가리키기 때문에.. 
    }
    fly(){
        return '난다';
    }
}

const bird = new Bird(10,30,100);
console.log(bird);
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

function Base(name){
    this.name = name;
}

class Derived extends Base{
    
} //피 상속자가 클라스이면 생성자함수 클래스 둘다 가능 // 생성자함수의 경우에는 둘 다 불가능

