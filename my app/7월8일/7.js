function Base1(name){
    this.name = name;
}

class Base2{}
let tmp = true;
// 3항 연산자
class Derived extends (tmp?Base1:Base2){
    
} 