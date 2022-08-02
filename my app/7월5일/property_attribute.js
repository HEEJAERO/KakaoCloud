var obj = {
    name: '홍길동'
}

console.dir(obj) // 객체의 세부내용을 브라우저에서 볼수있음

// Property Attribute 확인

const person1 = {
    name:'Lee',
    age:20
};

console.log(Object.getOwnPropertyDescriptor(person1,'name'));// 해당 프로퍼티의 Property Attribute 를 확인할 수 있음
console.log(Object.getOwnPropertyDescriptors(person1));


// property define
let person = {
    age:20
};
Object.defineProperty(person,'name',{
    value: '홍길동',
    writable: false,
    enumerable: false,
    configurable: true 
}) // == person.name ='홍길동'; 다만 해당 프로퍼티의 attribute 를 일일이 설정하는것이 가능하다

console.log(person);
console.log(Object.getOwnPropertyDescriptor(person,'name'));

person.name = '아이유';
console.log(person); // writable 을 false 로 설정했기 때문에 수정이 불가능

console.log(Object.keys(person)); // enumerable 을 false 로 설정했기때문에 name 은 출력x


for(let idx in person){
    console.log(idx);// person 안에있는 property key 값을 출력
    console.log(person[idx]); // value 출력
}
for(let value of person){ // of 는 해당 property 의 value???
    console.log(value);
}