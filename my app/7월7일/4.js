function Person(name){
    this.name = name;
    this.getName = function(){ // instance method

    }
}

Person.prototype.sayHello = function(){ // 프로토타입 객체에 함수를 붙이면 프로토타입 메서드 라고 부른다.
    console.log(`안녕하세요 ${this.name}`);
}

//instance 생성
const me = new Person('홍길동');

me.sayHello(); // this => 해당 instance (me 객체 )
// overriding
me.sayHello = function(){
    console.log(`Hello ${this.name}`);
}; 
// 만약 overriding 이 발생하면 이 발생된 overriding 에 의해서
// 숨겨진 prototype 메소드를 property shadowing 되었다고 한다
me.sayHello();