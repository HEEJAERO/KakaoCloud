// event handler => 이벤트처리를 위해 만든 자바스크립트 함수
/*function myFunc(){
    // option 중 선택된 요소의 text(tag 사이의 값) 으로 id="myDiv" 사이의 text 를 변경
    $("#myDiv").text($("option:selected").text());
}*/
function printRegion(){
    // 먼저 check 박스를 찾고 (type=checkbox)- 속성 선택자
    // check 된것을 찾고
    // 바로 뒤에 나오는 span(형제관계) 를  찾는다
    //console.log($("[type=checkbox]:checked + span").text());
    // 위의 코드는 한개일때는 문제가 없지만 여러개가 선택되었을때 여러개의 택스트를 1개의 문자열로 출력한다
    // 우리가 원하는 동작방식은 선택된 checkbox 를 개별적으로 처리하고 싶다!
    // each 함수 사용! each 함수안에는 callback 함수
    $("[type=checkbox]:checked + span").each((idx,item)=>{
        //idx : index 를 의미. 0부터 1씩 증가
        // item : 현재 수행시킬려는 문서객체를 지정(document object)
        // => jQuery 를 이용하기 위해 jQuery 객체로 바꿔줘야함
        console.log($(item).text());
    });
}/*
function myFunc(){ // 이미 작성된 태그에 변경을 가하는 메소드
    // method 에 대해 css , addClass, removeClass , text, val, attr, removeAttr,  each
    // css() style 을 변경 => repaint 가 발생 => 결과적으로 느려진다
    /!*$("#myDiv").css("color","red");
    $("#myDiv").css("background-color", "yellow");*!/
    // 이런식으로 css 를 두번 호출하면 실제로는 2번 랜더링이 된다 -> 리페인트 작업이 많아질수록 브라우저가 느려짐
    // => 이러한 리페인트 작업을 최소화 해야함 => class 를 이용!!
    $("#myDiv").addClass("myClass"); // 이 방식으로 처리하면 1번만 리페인팅 된다. 이런식으로 랜더링되는 횟수를 최소화 시켜줘야한다.
   // $("#myDiv").removeClass("myClass");  // class 제거
    //text() => tag 사이의 글자를 가져오는 메서드
    //$("myDiv").text();
    //$("myDiv").text("변경변경!!"); // text 의 내용을 변경
    // val() : 사용자 입력 양식(입력상자) 안에 들어있는 값을 가져오는 method
    // val("값을 변경!!") : 사용자 입력 양식(입력상자)안에 값을 변경하는 메서드
    // attr() : 속성의 값을 알아오거나 혹은 수정할때 사용!
    //console.log($("input[type=text]").attr("size"));  // size 속성의 값을 알아온다
    $("input[type=text]").attr("size", 30); // size 의 속성값을 변경
    // removeAttr("size") : 특정 속성의 제거
    // each() : 반복처리할때 사용
    // remove() : 찾은  element 를 삭제
    //$("#myDiv").remove();
    // empty() : 삭제이긴 한데 찾은 element 는 삭제하지 않고 그 후손들만 삭제


}*/
function myFunc(){ // 새로운 태그를 만들고 추가하는 방법
    // 여기까지는 일단 내가 제어하기를 원하는 element 를 먼저 찾고 method 를 적용
    // 그러면 새로운 element 를  추가하려면..?
    // <li>홍길동</li>
    // <li></li> 부터 만들고 글자를 넣어준다
    let li = $("<li></li>").text("강감찬"); //<li></li>
    // 원하는 element 를 만들었으니 원하는 위치에 붙여야한다.
    // 화면에 element 를 붙이기위해서는 총 4개의 method
    // 1.append() : "자식"으로 "맨 마지막"에 붙인다.
    //$("ul").append(li);
    // 2. prepend() : "자식" 으로 "맨 처음" 에 붙인다.
    //$("ul").prepend(li);
    // 3.after() : "형제" 로 바로 뒤에 붙인다.
    //$("li:eq(2)").after(li);
    // 4.before(): "형제" 로 바로 앞에 붙인다.
}

