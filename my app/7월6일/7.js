// 함수 선언문
function foo(){}

// 함수 표현식
var bar = function(){};

// 객체의 property 로 함수가 할당
const barx ={
    x: function(){} 
}; 

//위의 세가지의 경우에는 new 키워드가 사용 가능하다. => 즉 내부적으로 [[Constructor]] 라는 내부 메서드를 가지고 있다.
new foo();
new bar();
new barx.x();

const arrow = ()=>{};
//new arrow();  //TypeError: arrow is not a constructor => 즉 [[Constructor]] 라는 내부 메서드를 가지고 있지 않음

const obj ={
    x(){
        //ES6의 메서드
    }
}
//new obj.x();// TypeError: obj.x is not a constructor => 즉 [[Constructor]] 라는 내부 메서드를 가지고 있지 않음

// 함수 선언문 
function add(x,y){ 
    return x+y;
}

var inst = new add();  // undefined + undefined = NaN => primitive type => new 키워드로 인해 this 리턴
console.log(inst); // add {}

function createUser(name,role){
    return {name,role}
}
inst = new createUser();
console.log(inst);

//생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    }
}

const circle = Circle(5); // this 가 전역객체를 가르킴 => 
console.log(radius);  // 5 출력
console.log(circle); //undefined