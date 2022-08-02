function myFunc(){
    //jQuery 를 사용하여 1.내가원하는 Element 를 찾아서 jQuery 객체로 변환
    // HTML Element 를 referencing 하는 객체를 생성!!
    // selector 를 이용!
    // 1-1. 전체 선택자(universal selector)
    // $("문자열형태로 selector 를 명시")
    // 기호로 *
    $("*").css("color", "red");
    // 1-2. 태그 선택자(tag selector)
    //alert($("div").text()); // tag 사이 text 를 가져오는 역할(인자없을때)
    //$("div").text("소리없는 아우성!!"); // tag 사이의 text 를 변경(인자 있을떄)

    // 1-3. 아이디 선택자 (ID selector) => 주의  -html 상에서 id 는 유니크해야한다
    // 기호로 #
    //$("#myLi").remove();//remove - 삭제
    // 1-4. 클래스 선택자 (class selector) => id 와 유사하지만 class 값은 유니크하지 않다.
    // 기호로 "."
    // 여기서 block level vs inline element 의 차이를 눈으로 보자
    // block level 는 한라인에 1개만 사용하고 inline 은 여러개를 사용해도 무관하다.
    $(".haha").css("background-color", "yellow");
    // 1-5. 구조선택자
    // 기호로 ">" (자식선택자)" " (후손선택자 - 공백) -> 자식의 경우에는 하위 태그 1개만을 지칭. 후손의 경우에는 하위에 있는 모든 태그 지칭

    $("div li").css("color", "blue");
    // $("ul.myclass>li").css("color", "orange"); // ul 중 myclass 를 가진 태그의 자식중 li 를 선택
    // 기호로 "+" (바로 다음에 나오는 형제 1개를 지칭) "~" (다음에 나오는 형제를 모두 지칭)
    // 형제- 같은 레이어에잇는 태그
    //$("#seoul + li").remove(); //
    //$("#seoul ~ li").remove(); // seoul 이후에 나오는 같은 레이어의 li 모두 삭제
    // 참고 - 특수선택자
    // 기호로 :
    // 대구를 접근하는 방법1
    //$("ul.myclass > li:first + li").remove(); // li:first => 해당되는 li 중 첫번째
    //$("ul.myclass > li:last").remove(); // 마지막 꺼
    // 대구를 접근하는 방법2
    //$("ul.myclass >li:nth-child(2)").remove();

    // 1-6 속성선택자
    // 기호로 "[]" => 해당 속성을 가진 태그를 찾음
    // [size=10] => size 속성값이 10인 값을 찾는것 -> 속성과 값 둘 다 설정 가능하다.
    //alert($("[size=30]").val()); // 입력상자안의 값을 가져옴
    $("[size=30]").val("값을 변경할꺼임"); // 입력상자안의 값을 바꿈
}