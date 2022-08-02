//객체 literal을 이용해서 객체를 생성

const person ={
    firstName:'길동',
    lastName:'홍',
    // get 을 이용하면 반드시 return 구문이 존재해야한다. 
    get fullName(){
        return `${this.lastName}${this.firstName}`;  
    }, // get set 을 이용하면 같은 이름의 메서드를 사용할 수 있다.(약간 오버로딩과 비슷함?)
    set fullName(name){
        [this.lastName, this.firstName] = name.split(' ');
    }
    
}
// 이런식의 객체의 property , 즉 해당 데이터를 직접 접근하는것을 지양해야한다.
// person.firstName = '연아';
// person.lastName = '김';

// setter(메서드-접근자property) 를 통해 접근하는것이 좋다 => 해당 메서드에 유효성검사를 추가하면 이상한 값이 해당 데이터를 오염시키는것을 방지할 수 있다.
person.fullName = '김 연아'; //set 호출
//console.log(person.fullName()); 특이하게 getter(접근자 프로퍼티)는 이런식으로 사용하는것이 아니라
console.log(person.fullName); // get 호출

// 위와같이 하나의 property 를 이용해서 get 과 set 을 둘다 사용가능 => 사용되는 방법에 따라서 적절한 method 가 호출된다.

// 아래는 위의 객체리터럴을 class로 표현한것이다.
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.lastName}${this.firstName}`;  
    }
    set fullName(name){
        [this.lastName, this.firstName] = name.split(' ');
    }
}
const me = new Person('길동', '홍');
me.fullName = '김 연아';
console.log(me.fullName);