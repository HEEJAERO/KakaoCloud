
//4. 전개연산자(Spread Operation) => ... => 객체(혹은 배열) 과 같은 자료구조에서 요소들만을 추출하여 가져오는 연산자

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
// let result = arr1.concat(arr2, arr3); //아래와 같은 결과
// console.log(result);

let result = [...arr1, ...arr2, ...arr3];// ...arr1 => arr1 안의 요소들을 전부다 들고오는것
console.log(result);


let obj1={
    a: '1',
    b: '2'
}
let obj2={
    c: '3',
    d: '4'
}

//result = {obj1, obj2}  // 이런식으로 result 에 넣으면 객체안에 객체가 들어가는 형태로 들어가게 된다.
result = {...obj1, ...obj2}; // ... 을 이용하면 객체의 property 들만을 가져올 수 있다.
console.log(result);

// 구조 분해 할당( Es6 ,Destructuring)
// 이 방식을 사용하면 코드가 간결해짐
// 객체나 배열의 속성을 분해해서 개별변수에 담을수 있게 해준다.
let obj ={
    name: '홍길동',
    age : 20,
    address: {
        zipcode: '123-456',
        city:'서울'
    }
}

//let {name, age, address} = obj;
let {address: {zipcode, city}} = obj; // 이런식으로 객체 안의 객체도 분리가 가능하다.
console.log(zipcode);
console.log(city);


// 배열가지고도 구조분해할당이 가능하다.
let a, b;
[a, b] = [10, 20];
console.log(a + " " + b); // a=10 b=20



// 5.splice()
// 배열의 기존요소를 삭제하거나 교체하기에 적합한 메소드
// array.splice(start 위치, 삭제 count, item1, item2,...) =>
const months = ['1월', '2월', '4월', '5월', '8월'];
//months.splice(2, 0, '3월');
months.splice(3, 1, '7월');
console.log(months);

let q = months.splice(3, 1); // 이런식으로 삭제연산만 진행한다면 삭제된값이 리턴됨 (여러개일수도 있으므로 배열로 리턴)
console.log(q);


const arr = [1, 2, 3, 4, 5];
const arr_copy = arr;
arr_copy.splice(3, 1);
console.log(arr);
console.log(arr_copy);

















