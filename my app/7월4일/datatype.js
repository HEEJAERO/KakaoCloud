//1.number
let myNum = 1.0;
console.log(myNum===1); // true, number는 모두 실수로 처리 (64bit)

console.log(3/2); 

//2. String
let str = '이것은\n소리없는\n아우성';
console.log(str);

let str1 = `이것은
소리없는
아우성`;

console.log(str1);

let name1= '홍길동';
console.log('내 이름은 ' + name1 + ' 입니다.');
console.log(`내 이름은 ${name1} 입니다`);


//3.symbol

const mySymbol=Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);  // Symbol() 값이 노출되지 않음

const mySymbol1 = Symbol('소리'); // 인자를 넣어도 다른 심볼 -> Symbol의 인자는 그저 description(설명)
const mySymbol2 = Symbol('소리');

console.log(mySymbol1===mySymbol2);  // false;
console.log(mySymbol1.description); // description 출력가능

if(mySymbol1){ // 다음과 같은 조건문에서 Symbol 값이 논리값으로 사용될 수 있다- 있나? 없나? 그러나 다른 값으로 캐스팅은 안됨
    console.log("있어요!"); 
}

const s1 = Symbol.for('mySymbol'); 
// global symbol registry 라는 곳이 있음 
// 일단 거기에서 해당 인자를 키로 가지고 있는 symbol 을 찾음
// 만약 존재하지 않으면 symbol을 만들고 global symbol registry 에 등록하고 symbol 을 리턴 

const s2 = Symbol.for('mySymbol');  
console.log(s1===s2); //true 

Symbol.keyFor(s2); // symbol 가지고 키값을 찾아옴 

const Direction= {
    'UP':Symbol(),
    'DOWN':Symbol(),
    'LEFT':Symbol(),
    'RIGHT':Symbol()
}

let myDirection = Direction.UP;

if(myDirection==Direction.UP){

}