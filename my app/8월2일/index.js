// Array.prototype.map()
// 자바스크립트에서는 다양한 배열 자료구조를 지원한다.
// 1.map
const array1 = [1, 4, 9, 16];

// const map1 = array1.map(function(x){
//      return x*2;
// })
const map1 = array1.map((x) => x * 2);
const map2 = array1.map((value, index, array) =>{
    console.log(array);
} )
console.log(map1);
// Arrays.prototype.filter()
//filter는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 만듬

const words = ['세종대왕', '이황', '강감찬', '샤인머스켓', '소리없는 아우성'];
// 글자길이가 세글자를 초과하는 데이터만을 추려서 새로운 배열 생성
const result = words.filter((word)=>{
    return word.length > 3; // 결과값이 true 로 리턴되면 그 값은 살아남아 결과배열에 남는다.
})
