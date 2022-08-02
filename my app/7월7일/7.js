//static property  /method
// method의 종류
function Person(name){
    this.name = name;
    //instance 메소드
    this.callme = function(){};
}

Person.prototype.sayHello = function(){ // prototype 메소드 
    console.log('안녕하세요');
}
Person.staticMehod = function(){ // static method => instance 에서는 사용할수 없다 , 함수객체를 가지고 직접 메서드 사용
    console.log('하이하이');
}