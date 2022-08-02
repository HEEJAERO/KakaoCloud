class Person{
    //constructor(생성자)
    constructor(name){
        // instance의 초기화와 instance의 property 를 설정
        this.name = name;
    }
    // prototype method
    sayHello(){
        console.log('안녕하세요');
    }
    //static method 
    static sayHi(){
        console.log('요건 static');
    }
}
const me = new Person('홍길동');
Function.apply();
Object.apply()
