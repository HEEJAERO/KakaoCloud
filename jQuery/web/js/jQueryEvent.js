 // event 처리
 // on() : 이벤트를 등록하는 method => event 발생 시 실행을 지정
 // 맨앞에 인자는 javascript event ,뒤에 해당 event가 발생하면 동작하는 콜백함수를 명시
 // 이렇게 작성하면 html 은 순차적으로 코드를 불러오기 때문에 js 파일을 읽어들이는 시점에는 li 태그를 찾을 수 없다.(아직 li 가 만들어지지 않은상태에서
 // 아래의 코드가 실행 )
 // 이렇게 작성하면 아래 코드는 동작하지 않음
 $("li").on("click", ()=> {
     alert("소리없는 아우성!");
 })
 // ready 라는 event 가 있는데 이 이벤트는 로딩되어서 사용할 준비가 끝났을때
 // 발생하는 이벤트
 // document 가 ready 되면 ... 다시말해서 내용이 출력되기 위해 DOM 이 생성됬다는 의미
 // 즉 ready 상태가 되면(DOM Tree 가 모두 완성된 시점에..) 우리가 원하는 이벤트를 추가해주는 코드를 실행시키도록 아래와 같이 코드를 작성해야함
 //$(document).on("ready", ()=>{ // 1
 //$(document).ready(function(){   // 2.
 // 3. $()   => $(document).ready() 와 동일한 의미 => 앞의 3가지가 같은 의미
 $(function(){
    /* $("li").on("click", function() {
         //지금 발생한 이벤트의 source (event 가 발생한 객체) 를 알고싶음..
         // this 가 event handler 에서 사용될 경우 event source 객체를 지칭(event 가 발생한 객체)
         // 우리는 jQuery 를 하고 있기 때문에 이 문서객체를 jQuery 객체로 변환해서 사용
         alert($(this).text());
     })*/
     // 위의 코드랑 같은 의미
     $("li").click(function(){
         alert($(this).text());
     })
 })

