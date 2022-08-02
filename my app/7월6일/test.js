function Person1(name){
	this.name = name;
	return 1;   //생성자 함수의 return 값으로 primitive value 인 number..`
}

function Person2(name){
	this.name = name;
	return {}; //  return 값으로 객체 리터럴로 생성한 객체 반환
}

const person1 = new Person1('홍길동');
const person2 = new Person2('노희재');

console.log(person1);
console.log(person2);
