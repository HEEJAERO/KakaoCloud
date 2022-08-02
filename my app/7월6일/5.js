function Person(name){
    this.name = name;
    this.getName=function(){
        return `내 이름은 ${this.name}`;
    }
    //생성자 함수로 사용될 경우 return 을 사용하지 않아야 한다. => this를 자동으로 리턴해주기때문에
    //만약 return 이 있다면 (객체)
    return {};
    // this 가 리턴되는것이 아닌 {} 이 리턴되기 때문에 위에 선언한 값들을 사용할수 없다.
    // 근데 만약 return 값이 primitive value 라면 그 값을 무시하고 this가 instance 본인을 가르키게 된다.
    // 이런 복잡한 이유때문에 생성자함수를 만들때는  return 구문이 없는것이 편하다 
}

const person1 = new Person('아이유');
const person2 = new Person('김연아');
console.log(person1.getName());
console.log(person2.getName());