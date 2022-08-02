var obj = {
    'name': '홍길동',
    'printName': function myPrint(){
        console.log(`내 이름은 ${this.name}`);
    }
};
console.log(typeof obj);

//객체 동적 추가 및 삭제 
var obj = {
    myName: '홍길동'
}
obj.myAge = 20;
obj['!myPhone'] = '010-1234-5678'; // 네이밍 룰에 적합하지 않은 키를 추가할때는 braket notation 을 이용

console.log(obj);

delete obj.myAge; //삭제 
 
console.log(obj);

// 기타 다른 형태의 property 방식...
var obj={
    10:100,
    let: '권장되지 않음. 사용가능하긴함',
    myName : '홍길동',
    '!myName' : '김길동',
    myName : '김연아'  // 이런식으로 중복 선언을 하게 된다면 이전값을 덮어 씌운다.
}
console.log(obj);
console.log(obj.myAddress); //없는값을 조회 할때는 undefined 오류발생 안함

//Es6 에서 추가된 객체 리터럴 확장
let x = 1;
let y = 2;

var obj = {x,y} // 식별자를 key로,  value를 property 의 value 로 ... 
console.log(obj); 

// let myObj = {
//     name: '홍길동',
//     printName: function(){
//         console.log(this.name);
//     }
// } 
// 위의 코드와 같은 효과 - function 키워드를 삭제하고 key 를 메서드의 이름으로 ...
let myObj = {
    name: '홍길동',
    printName(){ // javascript 에서는 이런식의 축약표현만을 메서드라고 한다. 
        console.log(this.name);
    }
}
myObj.printName();


let myStr = 'Hello';
//primitive type 을 마치 객체(배열) 처럼 사용 
console.log(myStr[0]); // H 
console.log(myStr.length); // 5

myStr[0] ='h';

console.log(myStr); // Hello -> 원래값이 변경되지 않음, 임시로 만든 객체배열의 값만 변경되고 원래 primitive 데이터는 변경되지 않는다



