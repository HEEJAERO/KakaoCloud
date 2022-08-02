function Person(name){
    this.name = name;
}

Person.prototype = {
    sayHello(){
        console.log('안녕하세요');
    },
    //아래와 같은 링크가 끊어지는 현상이 발생하는것을 방지하기 위해서는 그냥 property를 하나 새로 넣어주면 된다.
    //constructor:Person
}
const me = new Person('홍길동');

console.log(me.constructor === Object); //true 